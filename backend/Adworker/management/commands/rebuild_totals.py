# Rebuild the three numbers on the Loans dashboard from the real loans and payments.
#
#   python manage.py rebuild_totals           only SHOWS the old and the new numbers
#   python manage.py rebuild_totals --apply   writes the new numbers
#
# The dashboard keeps running totals: every loan and payment adds to them or takes from them,
# and nothing ever checks them again. Old bugs (a loan counted as a repayment, a payment counted
# twice, a deleted payment never taken back) stay in them for ever. This command works them out
# again from the records, with the same rules the system uses today:
#
#   Total loans (Jumla.Mkopo)          = everything customers must repay (loans + interest)
#                                        - every repayment
#   Balance (Jumla.Total_balance)      = every repayment - every amount lent
#   Repayment for a month (Miezi)      = the repayments recorded for that month and year
#   Each customer's panel (UserInfo)   LOAN = their loans' "jumla", PROFIT = their loans' interest,
#                                        DEBT = their loans' "jumla" - their repayments
#                                        (the newest loan/payment row of the customer gets the same
#                                        number, because the Loan tab takes the payment limit from it)
#
# A repayment is a Malipo row with route "weka" that was not deleted (info is not "deleted").
# A loan is a FormMkopo row: "jumla" is what must be repaid, "RealMkopo" what was lent.

from collections import defaultdict

from django.core.management.base import BaseCommand
from django.db import transaction

from Adworker.models import FormMkopo, Malipo, Jumla, Miezi, UserInfo, customer_debt, set_customer_figures

MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December']


def number(value):
    try:
        return float(str(value).replace(',', '').strip())
    except (TypeError, ValueError):
        return 0.0


def money(value):
    return '{:,.0f}'.format(value)


class Command(BaseCommand):
    help = 'Work out the Loans dashboard totals again from the loans and payments (use --apply to save).'

    def add_arguments(self, parser):
        parser.add_argument('--apply', action='store_true', help='save the new numbers (without it nothing changes)')

    def handle(self, *args, **options):
        lent = 0.0
        to_repay = 0.0
        for loan in FormMkopo.objects.all():
            lent += number(loan.RealMkopo)
            to_repay += number(loan.jumla)

        repaid = 0.0
        by_month = defaultdict(float)          # (year, month name) -> repayments
        for pay in Malipo.objects.filter(route='weka').exclude(info='deleted'):
            amount = number(pay.loan_repay)
            repaid += amount
            month = str(pay.mwezi or '').strip().capitalize()
            year = str(pay.mwaka or '').strip()
            if month in MONTHS and year:
                by_month[(year, month)] += amount

        new_loans = round(to_repay - repaid)
        new_balance = round(repaid - lent)

        total = Jumla.objects.get(pk=1)
        self.stdout.write('Loans: %s lent, %s to repay | repayments: %s' % (money(lent), money(to_repay), money(repaid)))
        self.stdout.write('')
        self.stdout.write('%-22s %18s %18s' % ('', 'now', 'rebuilt'))
        self.stdout.write('%-22s %18s %18s' % ('Total loans', money(total.Mkopo), money(new_loans)))
        self.stdout.write('%-22s %18s %18s' % ('Balance', money(total.Total_balance), money(new_balance)))

        # every year that has a row or a repayment
        years = set(Miezi.objects.values_list('user', flat=True)) | set(y for (y, m) in by_month)
        changes = []
        for year in sorted(y for y in years if y):
            row = Miezi.objects.filter(user=year).first()
            for month in MONTHS:
                old = number(getattr(row, month)) if row else 0.0
                new = by_month.get((year, month), 0.0)
                if abs(old - new) >= 0.5:
                    changes.append((year, month, old, new))
        self.stdout.write('')
        self.stdout.write('Repayment per month (only months that change):')
        if not changes:
            self.stdout.write('  none')
        for year, month, old, new in changes:
            self.stdout.write('  %s %-10s %18s %18s' % (year, month, money(old), money(new)))

        # each customer's DEBT
        customers = []
        for info in UserInfo.objects.all().order_by('user'):
            if not info.user:
                continue
            old_values = (number(info.mkopo), number(info.Faida), number(info.Balance))

            class Figures:
                pass
            figures = set_customer_figures(Figures(), info.user)
            new_values = (figures.mkopo, figures.Faida, figures.Balance)
            latest = None
            for row in Malipo.objects.filter(user__iexact=info.user, route__in=['toa', 'weka']).exclude(info='deleted').order_by('-pk'):
                latest = row
                break
            row_old = number(latest.Balance) if latest is not None else None
            panel_changes = any(abs(a - b) >= 0.5 for a, b in zip(old_values, new_values))
            if panel_changes or (latest is not None and abs(row_old - figures.Balance) >= 0.5):
                customers.append((info, old_values, new_values, latest))
        self.stdout.write('')
        self.stdout.write('Customer panel LOAN / PROFIT / DEBT (only customers that change):')
        if not customers:
            self.stdout.write('  none')
        for info, old_values, new_values, latest in customers:
            for label, a, b in zip(('LOAN', 'PROFIT', 'DEBT'), old_values, new_values):
                if abs(a - b) >= 0.5:
                    self.stdout.write('  %-20s %-7s %15s %15s' % (info.user, label, money(a), money(b)))

        if not options['apply']:
            self.stdout.write('')
            self.stdout.write('Nothing was changed. Run again with --apply to save these numbers.')
            return

        with transaction.atomic():
            total.Mkopo = new_loans
            total.Total_balance = new_balance
            total.save(update_fields=['Mkopo', 'Total_balance'])
            for year, month, old, new in changes:
                row, created = Miezi.objects.get_or_create(user=year)
                setattr(row, month, new)
                row.save(update_fields=[month])
            for info, old_values, new_values, latest in customers:
                info.mkopo, info.Faida, info.Balance = new_values
                info.save(update_fields=['mkopo', 'Faida', 'Balance'])
                if latest is not None:
                    latest.Balance = new_values[2]
                    latest.save(update_fields=['Balance'])
        self.stdout.write('')
        self.stdout.write(self.style.SUCCESS('Saved.'))
