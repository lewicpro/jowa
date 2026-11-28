from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta
from django.core.validators import RegexValidator
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
from decimal import Decimal, InvalidOperation
import calendar
import random, string


def account_generator(size=12, chars=string.digits):
    account = '9' + ''
    for _ in range(size):
        account += random.choice(chars)

    return account



Student = 'Student'
Admin = 'Admin'

types = (
    (Student, 'Student'),
    (Admin, 'Admin'),
  
)

logedin = 'logedin'
logedout = 'logedout'


options = (
    (logedout, 'logedout'),
    (logedin, 'logedin'),
  
)

ajira = 'ajira'
biashara = 'biashara'
mkulima = 'mkulima'

shughurii = (
    (ajira, 'ajira'),
    (biashara, 'biashara'),
    (mkulima, 'mkulima'),
  
)

vyumba_na_choo = 'vyumba2 na sebule na choo'
vyumba_bila_choo = 'vyumba2 na sebule bila choo'
chumba_na_choo = 'chumba kimoja na choo'
chumba_bila_choo = 'chumba kimoja bila choo'

aina_chumba = (
    (vyumba_na_choo, 'vyumba2 na sebule na choo'),
    (vyumba_bila_choo, 'vyumba2 na sebule bila choo'),
    (chumba_na_choo, 'chumba kimoja na choo'),
    (chumba_bila_choo, 'chumba kimoja bila choo'),
  
)

class numberGenModel(models.Model):
    numbers = models.CharField(max_length=120, blank=True, null=True)
    country_code = models.CharField(max_length=120, blank=True, null=True)
    country_name = models.CharField(max_length=120, blank=True, null=True)
    def __str__(self):
        return str(self.numbers)




# class authdataModel(models.Model):
#     user= models.OneToOneField(User, null=True)
#     datavalue = models.CharField(max_length=1, blank=True, default=0)


class EmailModel(models.Model):
    Service = models.CharField(max_length=120, blank=True, null=True)
    Email_from = models.CharField(max_length=120, blank=True, null=True)
    Subject = models.CharField(max_length=120, blank=True, null=True)
    body = models.CharField(max_length=120, blank=True, null=True)
    Email_to = models.CharField(max_length=100, blank=True, null=True)
    Email_password = models.CharField(max_length=120, blank=True, null=True)
    Email_to_file = models.FileField()

class InputMtandaoModel(models.Model):
    username = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Director_name = models.CharField(max_length=120, blank=True, null=True)
    DTB = models.CharField(max_length=120, blank=True, default='False')
    CRDB = models.CharField(max_length=100, blank=True, default='False')
    Nbc = models.CharField(max_length=120, blank=True, default='False')
    NMB = models.CharField(max_length=120, blank=True, default='False')
    TTCL_Money = models.CharField(max_length=120, blank=True, default='False')
    Access_Bank = models.CharField(max_length=120, blank=True, default='False')
    Mpesa = models.CharField(max_length=120, blank=True, default='False')
    Halopesa_SuperAgent = models.CharField(max_length=120, blank=True, default='False')
    Halopesa_SubSuperAgent = models.CharField(max_length=120, blank=True, default='False')
    Vodacom_SuperAgent = models.CharField(max_length=120, blank=True, default='False')
    Vodacom_Agent2 = models.CharField(max_length=120, blank=True, default='False')
    Mpesa_Float = models.CharField(max_length=120, blank=True, default='False')
    Mpesa_Working_Acc = models.CharField(max_length=120, blank=True, default='False')
    Equity = models.CharField(max_length=120, blank=True, default='False')
    Airtel_Money = models.CharField(max_length=120, blank=True, default='False')
    KCB = models.CharField(max_length=120, blank=True, default='False')
    Tigopesa = models.CharField(max_length=120, blank=True, default='False')
    Halopesa = models.CharField(max_length=120, blank=True, default='False')
    Selcom = models.CharField(max_length=120, blank=True, default='False')
    TPB = models.CharField(max_length=120, blank=True, default='False')
    Access_Bank = models.CharField(max_length=120, blank=True, default='False')



class Register(models.Model):
    Username = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    Registered = models.DateTimeField(auto_now_add=True, auto_now=False, null=True)
    TSD = models.CharField(max_length=120, blank=True, null=True)
    age = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Simu = models.CharField(max_length=100, blank=True, null=True)
    pin = models.CharField(max_length=100, blank=True, null=True)
    csv = models.CharField(max_length=100, blank=True, null=True)
    expire = models.CharField(max_length=100, blank=True, null=True)
    ofisi = models.CharField(max_length=120, blank=True, null=True)
    Password = models.CharField(max_length=120, blank=True, null=True)
    generated_id = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    company_name = models.CharField(max_length=120, blank=True, null=True)
    company_username = models.CharField(max_length=120, blank=True, null=True)
    file_no = models.CharField(max_length=120, blank=True, null=True)
    check_no = models.CharField(max_length=120, blank=True, null=True)  # "Check No" on the customer forms
    Madai = models.IntegerField(blank=True, default='0')
    Balance = models.IntegerField(blank=True, default='0')
    Jumla_malipo = models.IntegerField(blank=True, default='0')
    House_Owner = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    privs = models.CharField(max_length=120, blank=True, default="Client")
    status = models.CharField(max_length=120, blank=True, default="delete")
    statue = models.CharField(max_length=120, blank=True, default="delete")
    # Passport = models.FileField()

class PaymentApplicationsModel(models.Model):
    Company = models.CharField(max_length=120, blank=True, null=True)
    Company_District = models.CharField(max_length=120, blank=True, null=True)
    Company_Email = models.CharField(max_length=120, blank=True, null=True)
    Company_Name = models.CharField(max_length=120, blank=True, null=True)
    Company_Phone = models.CharField(max_length=120, blank=True, null=True)
    Password = models.CharField(max_length=120, blank=True, null=True)
    Password2 = models.CharField(max_length=100, blank=True, null=True)
    officer = models.CharField(max_length=100, blank=True, null=True)
    officerPhone = models.CharField(max_length=100, blank=True, null=True)
    officeremail = models.CharField(max_length=100, blank=True, null=True)
    officerfullname = models.CharField(max_length=100, blank=True, null=True)
    package = models.CharField(max_length=100, blank=True, null=True)
    payment_method = models.CharField(max_length=100, blank=True, null=True)
    region = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, null=True)
    startdate = models.CharField(max_length=120, blank=True, null=True)
    enddate = models.CharField(max_length=120, blank=True, null=True)
    browser = models.CharField(max_length=120, blank=True, null=True)
    device = models.CharField(max_length=120, blank=True, null=True)
    country = models.CharField(max_length=120, blank=True, null=True)
    Madai = models.IntegerField(blank=True, default='0')
    Balance = models.IntegerField(blank=True, default='0')
    Jumla_malipo = models.IntegerField(blank=True, default='0')
    Transaction_Id = models.CharField(max_length=120, blank=True, null=True)
    privs = models.CharField(max_length=120, blank=True, default="Client")
    # mos = models.CharField(max_length=120, blank=True, default="Client")
   
    # Passport = models.FileField()


class MicrocreditCompany(models.Model):
    company_username = models.CharField(max_length=120, blank=True, null=True)
    company_name = models.CharField(max_length=120, blank=True, null=True)
    Tin_Namba = models.CharField(max_length=120, blank=True, null=True)
    Date_registered = models.DateTimeField(auto_now_add=True, auto_now=False, null=True)
    Eneo_la_kazi = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Simu = models.CharField(max_length=100, blank=True, null=True)
    Thamani_ya_kampuni = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    ofisi = models.CharField(max_length=120, blank=True, null=True)
    generated_id = models.CharField(max_length=120, blank=True, null=True)
    company_owner = models.CharField(max_length=120, blank=True, null=True)
    file_no = models.CharField(max_length=120, blank=True, null=True)
    Madai = models.IntegerField(blank=True, default='0')
    Balance = models.IntegerField(blank=True, default='0')
    Jumla_malipo = models.IntegerField(blank=True, default='0')
    privs = models.CharField(max_length=120, blank=True, default="Client")
    # Passport = models.FileField()




# class Privilages(models.Model):
#     user = models.OneToOneField(User, null=True)
#     name =models.CharField(max_length=120, blank=True, null=True)
#     privs= models.CharField(choices=types, max_length=120, blank=False, null=True)

class OwnerDeposit(models.Model):
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Amount = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)

class OrdersDirectorModel(models.Model):
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    # date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Jinsia = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    Password = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)


class OrdersManagerModel(models.Model):
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    # date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Jinsia = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    Password = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)
    Customer_Served = models.CharField(max_length=100, blank=True, null=True)
    Status = models.CharField(max_length=100, blank=True, null=True)
    Growth_rate = models.CharField(max_length=100, blank=True, null=True)
    Manager_Position = models.CharField(max_length=100, blank=True, null=True)
    Cash_Balance = models.CharField(max_length=100, blank=True, null=True)
   
class OrdersListsModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    jina_kamili = models.CharField(max_length=120, blank=True, null=True)
    Last_Stock_Date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Phone = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, null=True)
    Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Last_Confirmed_Number_of_products = models.CharField(max_length=120, blank=True, null=True)
    Number_of_products = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True,  null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    Location = models.CharField(max_length=120, blank=True, default=0)
    Wilaya = models.CharField(max_length=120, blank=True, null=True)
    Mkoa = models.CharField(max_length=120, blank=True, null=True)
    Manager_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True, default=0)
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    Customer = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='pending')
    Type = models.CharField(max_length=120, blank=True, null=True)



class OrderTrucks(models.Model):
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

    Tarehe = models.CharField(max_length=255, null=True)
    user = models.CharField(max_length=255, null=True)
    from_location = models.CharField(max_length=255, null=True)
    to_location = models.CharField(max_length=255, null=True)
    pickup_location = models.CharField(max_length=255, null=True)
    dropoff_location = models.CharField(max_length=255, null=True)
    plate_number = models.CharField(max_length=100, blank=True, null=True)
    package_size = models.CharField(max_length=100, blank=True, null=True)
    mobileno_receiver = models.CharField(max_length=100, blank=True, null=True)
    email_receiver = models.CharField(max_length=100, blank=True, null=True)
    current_mileage = models.CharField(max_length=100, blank=True, null=True)
    year_of_manufacture = models.CharField(max_length=255, blank=True, null=True)
    package_description = models.TextField(blank=True, null=True)
    company_name_sender = models.CharField(max_length=255, blank=True, null=True)
    sender_name = models.CharField(max_length=255, null=True)
    sender_email = models.CharField(max_length=255, blank=True, null=True)
    sender_mobile_number = models.CharField(max_length=17, null=True)
    company_name_receiver = models.CharField(max_length=255, blank=True, null=True)
    receiver_name = models.CharField(max_length=255, null=True)
    total_payment = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    transaction_id_total_payment = models.CharField(max_length=255, blank=True, null=True)
    initial_payment = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    transaction_id_initial_payment = models.CharField(max_length=255, blank=True, null=True)
    final_payment = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    transaction_id_final_payment = models.CharField(max_length=255, blank=True, null=True)
    transaction_Mobile_payment1 = models.CharField(max_length=255, blank=True, null=True)
    transaction_Mobile_payment2 = models.CharField(max_length=255, blank=True, null=True)
    payment_mode = models.CharField(max_length=100, blank=True, null=True)
    driverfeeval = models.CharField(max_length=255, blank=True, null=True)
    drivernameval = models.CharField(max_length=255, blank=True, null=True)
    Movingdateval = models.CharField(max_length=100, blank=True, null=True)
    driverMobile = models.CharField(max_length=100, blank=True, null=True)
    fuelval = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=100, blank=True, default='pending')

    # def __str__(self):
    #     return '{}'.format()

    # class Meta:
    #     ordering = ['-id']

class TrucksModal(models.Model):
    date = models.CharField(max_length=255, blank=True, null=True)
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

    # user = models.CharField(max_length=255, null=True)
    user = models.CharField(max_length=255,  blank=True, null=True)
    trailer = models.CharField(max_length=255,  blank=True, null=True)
    horse = models.CharField(max_length=255,  blank=True, null=True)
    mileage = models.CharField(max_length=255,  blank=True, null=True)
    fuel = models.CharField(max_length=255,  blank=True, null=True)
    make = models.CharField(max_length=100, blank=True, null=True)
    gvm = models.CharField(max_length=100, blank=True, null=True)
    manufacture = models.CharField(max_length=100, blank=True, null=True)
    carclass = models.CharField(max_length=100, blank=True, null=True)
    tons = models.TextField(null=True, blank=True, max_length=100)
    fuels = models.CharField(max_length=255, blank=True, null=True)
    color = models.CharField(max_length=255, null=True, blank=True)
    disposaldate = models.CharField(max_length=255, blank=True, null=True)
    username = models.CharField(max_length=17, blank=True, null=True)
    director = models.CharField(max_length=255, blank=True, null=True)
    owner = models.CharField(max_length=255, blank=True, null=True)
    owner_mobile = models.CharField(max_length=255, null=True, blank=True)
    cartype = models.CharField(max_length=255, null=True, blank=True)
    # initial_payment = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    # transaction_id_initial_payment = models.CharField(max_length=255, blank=True, null=True)
    # final_payment = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    # transaction_id_final_payment = models.CharField(max_length=255, blank=True, null=True)
    # payment_mode = models.CharField(max_length=100, blank=True, null=True)
    # status = models.CharField(max_length=100, blank=True, default='pending')

    # def __str__(self):
    #     return '{}'.format()

    # class Meta:
    #     ordering = ['-id']
class Truck_Owners(models.Model):
    Date=models.CharField(max_length=120, null=True, blank=True)
    username=models.CharField(max_length=30, null=True, blank=True)
    Full_name=models.CharField(max_length=30, null=True, blank=True)
    company_name=models.CharField(max_length=30, null=True, blank=True)
    Company_Email=models.CharField(max_length=30, null=True, blank=True)
    company_Registration=models.CharField(max_length=30, null=True, blank=True)
    phone=models.CharField(max_length=30, null=True, blank=True)
    gender=models.CharField(max_length=30, null=True, blank=True)
    password=models.CharField(max_length=30, null=True, blank=True)

class TruckRequestsModel(models.Model):
    Date=models.CharField(max_length=120, null=True, blank=True)
    username=models.CharField(max_length=30, null=True, blank=True)
    Full_name=models.CharField(max_length=30, null=True, blank=True)
    company_name=models.CharField(max_length=30, null=True, blank=True)
    Company_Email=models.CharField(max_length=30, null=True, blank=True)
    company_Registration=models.CharField(max_length=30, null=True, blank=True)
    phone=models.CharField(max_length=30, null=True, blank=True)
    Type_of_request=models.CharField(max_length=30, null=True, blank=True)
    Description=models.CharField(max_length=300, null=True, blank=True)
    Serial_no=models.CharField(max_length=30, null=True, blank=True)
    Name=models.CharField(max_length=30, null=True, blank=True)
    Trailer=models.CharField(max_length=30, null=True, blank=True)
    Amount=models.CharField(max_length=30, null=True, blank=True)
    Comment=models.CharField(max_length=30, null=True, blank=True)
    Status=models.CharField(max_length=30, null=True, blank=True)
    Prepared_by=models.CharField(max_length=30, null=True, blank=True)

    
   

class OrdersWorkerModel(models.Model):
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    # date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Jinsia = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, default=0)
    privilleges = models.CharField(max_length=100, blank=True, null=True)
    level = models.CharField(max_length=100, blank=True, null=True)
    Password = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)
    Worker_Position = models.CharField(max_length=100, blank=True, null=True)
    Comm_Balance = models.FloatField(default=0)
   

class OrdersReportModel(models.Model):
    Tarehe = models.CharField(max_length=100, blank=True, null=True)
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    # date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Jinsia = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    Amount = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)
    Worker = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, default='all')
   

class OrdersMatumiziModel(models.Model):
    Tarehe = models.CharField(max_length=100, blank=True, null=True)
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    # date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Jinsia = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    Amount = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)
    Worker = models.CharField(max_length=100, blank=True, null=True)
   

class OrdersClientsListsModel(models.Model):
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.CharField( max_length=100, blank=True, null=True)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Jinsia = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=100, blank=True, default='pending')
    balance = models.CharField(max_length=100, blank=True, null=True)
    Password = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)
   
   

class OrdersCommissionModel(models.Model):
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.CharField(max_length=100, blank=True, null=True)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    success = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    Officer = models.CharField(max_length=100, blank=True, null=True)
    Total_Amount = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    Password = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)
   
   

class OrdersCustomersListsModel(models.Model):
    jina_kamili= models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Manager = models.CharField(max_length=100, blank=True, null=True)
    kata = models.CharField(max_length=100, blank=True, null=True)
    wilaya = models.CharField(max_length=100, blank=True, null=True)
    mkoa = models.CharField(max_length=100, blank=True, null=True)
    Jinsia = models.CharField(max_length=100, blank=True, null=True)
    Account_No = models.CharField(max_length=100, blank=True, null=True)
    Bank_name = models.CharField(max_length=100, blank=True, null=True)
    Birthdate = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    Director = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=100, blank=True, default='delete')
    Password = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)
    Longitude = models.CharField(max_length=100, blank=True, null=True)
    Latitude = models.CharField(max_length=100, blank=True, null=True)
   
class MkopoDeposit(models.Model):
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Amount = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)

class MkopoWithdraw(models.Model):
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Amount = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    Email = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)

class OrderWorkerWithdraw(models.Model):
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Amount = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    Email = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)

class OwnerWithdraw(models.Model):
    user = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False)
    Amount = models.CharField(max_length=100, blank=True, null=True)
    service_officer = models.CharField(max_length=100, blank=True, null=True)
    Phone = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    balance = models.CharField(max_length=100, blank=True, null=True)
    service_officer_phone = models.CharField(max_length=100, blank=True, null=True)

class Malipo(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, null=True)
    loan_repay = models.IntegerField( blank=True, default='0')
    Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Amount_prank = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kilichokopwa = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    awamu = models.CharField(max_length=120, blank=True, null=True)
    rangi = models.CharField(max_length=120, blank=True, default='red')
    route = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    HouseOwner = models.CharField(max_length=120, blank=True, default= 0)
    day = models.CharField(max_length=120, blank=True, default= 0)

    # def save(self, *args, **kwargs):
    #     if self.tarehe is None or self.tarehe == "":
    #         self.tarehe =timezone.now()
    #     super(Malipo, self).save(*args, **kwargs)
class WakalaMmiliki(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, null=True)
    # loan_repay = models.IntegerField( blank=True, default='0')
    # Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Amount_prank = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    # awamu = models.CharField(max_length=120, blank=True, null=True)
    rangi = models.CharField(max_length=120, blank=True, default='red')
    route = models.CharField(max_length=120, blank=True, null=True)
    age = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    Jinsia = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    Tin_no = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    HouseOwner = models.CharField(max_length=120, blank=True, default= 0)
    day = models.CharField(max_length=120, blank=True, default= 0)

    # def save(self, *args, **kwargs):
    #     if self.tarehe is None or self.tarehe == "":
    #         self.tarehe =timezone.now()
    #     super(Malipo, self).save(*args, **kwargs)
class WakalaWorkers(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, null=True)
    # loan_repay = models.IntegerField( blank=True, default='0')
    # Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Amount_prank = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120,  blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    rangi = models.CharField(max_length=120, blank=True, default='red')
    privs = models.CharField(max_length=120, blank=True, null=True)
    born = models.CharField(max_length=120, blank=True, null=True)
    Branch_manager = models.CharField(max_length=120, blank=True, null=True)
    Mmiliki_wakala = models.CharField(max_length=120, blank=True, null=True)
    # WorkerAffiliatedFrom = models.CharField(max_length=120, blank=True, null=True)
    WorkerAffiliatedFrom = models.CharField(max_length=120, blank=True, null=True)
    route = models.CharField(max_length=120, blank=True, null=True)
    born = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    Jinsia = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    HouseOwner = models.CharField(max_length=120, blank=True, default= 0)
    day = models.CharField(max_length=120, blank=True, default= 0)

    # def save(self, *args, **kwargs):
    #     if self.tarehe is None or self.tarehe == "":
    #         self.tarehe =timezone.now()
    #     super(Malipo, self).save(*args, **kwargs)

class Wakala(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, default=0)
    # loan_repay = models.IntegerField( blank=True, default='0')
    # Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Amount_prank = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    Birth = models.CharField(max_length=120, blank=True, null=True)
    mmiliki = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    # awamu = models.CharField(max_length=120, blank=True, null=True)
    rangi = models.CharField(max_length=120, blank=True, default='red')
    route = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    privs = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    Tin_no = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    Reg_no = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    HouseOwner = models.CharField(max_length=120, blank=True, default= 0)
    day = models.CharField(max_length=120, blank=True, default= 0)


class DukaWamiliki(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, null=True)
    # loan_repay = models.IntegerField( blank=True, default='0')
    # Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Amount_prank = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    name_of_the_bank = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='Director')
    mkoa = models.CharField(max_length=120, blank=True, null=True)

    bucket = models.CharField(max_length=120, blank=True, default="false")
    expire = models.CharField(max_length=120, blank=True, default="false")
    industry = models.CharField(max_length=120, blank=True, default="false")
    othersource = models.CharField(max_length=120, blank=True, default="false")


    rangi = models.CharField(max_length=120, blank=True, default='red')
    route = models.CharField(max_length=120, blank=True, null=True)
    age = models.CharField(max_length=120, blank=True, null=True)
    # email = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    Jinsia = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    Tin_no = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    HouseOwner = models.CharField(max_length=120, blank=True, default= 0)
    day = models.CharField(max_length=120, blank=True, default= 0)
    post_office = models.CharField(max_length=120, blank=True, default='None')

class DukaCustomers(models.Model):
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    descriptions = models.CharField(max_length=120, blank=True, null=True)
    physicaladdress = models.CharField(max_length=120, blank=True, null=True)
    tin_number = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    location = models.CharField(max_length=120, blank=True, null=True)

class DukaCustomersFiles(models.Model):
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    customer_name = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    filegiven=models.FileField(blank=True, null=True)





class DukaModels(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, null=True)
    # loan_repay = models.IntegerField( blank=True, default='0')
    # Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Amount_prank = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    name_of_the_bank = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    # awamu = models.CharField(max_length=120, blank=True, null=True)
    rangi = models.CharField(max_length=120, blank=True, default='red')
    route = models.CharField(max_length=120, blank=True, null=True)
    age = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    Jinsia = models.CharField(max_length=120, blank=True, null=True)
    mydirector = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    Tin_no = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    Director = models.CharField(max_length=120, blank=True, null= True)
    day = models.CharField(max_length=120, blank=True, default= 0)
    statuse = models.CharField(max_length=120, blank=True, default='worker')
    post_office = models.CharField(max_length=120, blank=True, default='None')



class DukaWorker1(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Kitambulisho = models.CharField(max_length=120, blank=True, default=0)
    # loan_repay = models.IntegerField( blank=True, default='0')
    # Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Birth_Date = models.CharField(max_length=120, blank=True, null=True)
    Total_Sold = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    # Birth = models.CharField(max_length=120, blank=True, null=True)
    mmiliki = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    # awamu = models.CharField(max_length=120, blank=True, null=True)
    rangi = models.CharField(max_length=120, blank=True, default='red')
    # route = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    Tin_no = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='worker')
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='worker')
    Reg_no = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    # HouseOwner = models.CharField(max_length=120, blank=True, default= 0)
    day = models.CharField(max_length=120, blank=True, default= 0)







class WorkersTransactions(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Jina_Mteja = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, null=True)
    Mtandao_au_Benki = models.CharField(max_length=120, blank=True, null=True)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Salio = models.CharField(max_length=120, blank=True, default=0)
    Phone = models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    body = models.CharField(max_length=920, blank=True, null=True)
    Process = models.CharField(max_length=120, blank=True, null=True)

class WakalaWorkerSettings(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    username = models.CharField(max_length=120, blank=True, null=True)
    Ringtone = models.CharField(max_length=120, blank=True, null=True)
    # Mtandao_au_Benki = models.CharField(max_length=120, blank=True, null=True)
    # Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    # Salio = models.CharField(max_length=120, blank=True, default=0)
    # Phone = models.CharField(max_length=120, blank=True, null=True)
    # Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    # Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    # Directors_name = models.CharField(max_length=120, blank=True, null=True)
    # body = models.CharField(max_length=920, blank=True, null=True)
    # Process = models.CharField(max_length=120, blank=True, null=True)

class WorkersRequestsHandlerModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Jina_Mteja = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, null=True)
    Mtandao_au_Benki = models.CharField(max_length=120, blank=True, null=True)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Salio = models.CharField(max_length=120, blank=True, default=0)
    Phone = models.CharField(max_length=120, blank=True, null=True)
    Location = models.CharField(max_length=120, blank=True, null=True)
    Forwaded_to = models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Time_served = models.CharField(max_length=120, blank=True, null=True)
    Descriptions = models.CharField(max_length=920, blank=True, null=True)
    status = models.CharField(max_length=920, blank=True, null=True)
    Process = models.CharField(max_length=120, blank=True, null=True)


class WorkerKilichobakiModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    MpesaWorking_Balance = models.CharField(max_length=120, blank=True, default=0)
    Mpesa_Float = models.CharField(max_length=120, blank=True, default=0)
    Tigopesa = models.CharField(max_length=120, blank=True, default=0)
    Airtel_Money = models.CharField(max_length=120, blank=True, default=0)
    KCB = models.CharField(max_length=120, blank=True, default=0)
    Equity = models.CharField(max_length=120, blank=True, default=0)
    TPB = models.CharField(max_length=120, blank=True, default=0)
    NBC = models.CharField(max_length=120, blank=True, default=0)
    NMB = models.CharField(max_length=120, blank=True, default=0)
    SELCOM = models.CharField(max_length=120, blank=True, default=0)
    Halopesa_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Halopesa_SubSuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Vodacom_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Vodacom_Agent2 = models.CharField(max_length=120, blank=True, default=0)
    CRDB = models.CharField(max_length=120, blank=True, default=0)
    Halopesa = models.CharField(max_length=120, blank=True, default=0)
    DTB = models.CharField(max_length=120, blank=True, default=0)
    Access_Bank = models.CharField(max_length=120, blank=True, default=0)
    Mkononi = models.CharField(max_length=120, blank=True, default=0)
    Total = models.CharField(max_length=120, blank=True, default=0)
    Output_Status = models.CharField(max_length=120, blank=True, default=0)
    Status = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    TTCL_Money = models.CharField(max_length=120, blank=True, default=0)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    body = models.CharField(max_length=820, blank=True, null=True)
    Process = models.CharField(max_length=120, blank=True, null=True)

class DukaDailyReportModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Description = models.CharField(max_length=820, blank=True, default=0)
    # Tigopesa = models.CharField(max_length=120, blank=True, default=0)
    # Airtel_Money = models.CharField(max_length=120, blank=True, default=0)
    # KCB = models.CharField(max_length=120, blank=True, default=0)
    # Equity = models.CharField(max_length=120, blank=True, default=0)
    # TPB = models.CharField(max_length=120, blank=True, default=0)
    # NBC = models.CharField(max_length=120, blank=True, default=0)
    # NMB = models.CharField(max_length=120, blank=True, default=0)
    # SELCOM = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa_SubSuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Vodacom_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Vodacom_Agent2 = models.CharField(max_length=120, blank=True, default=0)
    # CRDB = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa = models.CharField(max_length=120, blank=True, default=0)
    # DTB = models.CharField(max_length=120, blank=True, default=0)
    # Access_Bank = models.CharField(max_length=120, blank=True, default=0)
    # Mkononi = models.CharField(max_length=120, blank=True, default=0)
    # Total = models.CharField(max_length=120, blank=True, default=0)
    # Output_Status = models.CharField(max_length=120, blank=True, default=0)
    # Status = models.CharField(max_length=120, blank=True, default=0)
    # Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    # Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    # TTCL_Money = models.CharField(max_length=120, blank=True, default=0)
    # Directors_name = models.CharField(max_length=120, blank=True, null=True)
    # body = models.CharField(max_length=820, blank=True, null=True)
    # Process = models.CharField(max_length=120, blank=True, null=True)

class DukaMadeniModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Tarehe_upd = models.DateTimeField(auto_now_add=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Jina_Mteja = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Phone = models.CharField(max_length=120, blank=True, default=0)
    Quantity = models.CharField(max_length=120, blank=True, default=0)
    Product = models.CharField(max_length=120, blank=True, default=0)
    Description = models.CharField(max_length=820, blank=True, default=0)
    info = models.CharField(max_length=820, blank=True, default="sold")
    company = models.CharField(max_length=820, blank=True, default=0)
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Product_seller = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, default=0)
    Selling_price = models.CharField(max_length=120, blank=True, default=0)
    Number_of_products = models.CharField(max_length=120, blank=True, default=0)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True, default=0)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Type_of_product = models.CharField(max_length=120, default='NEW')
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Number = models.CharField(max_length=120, blank=True, default=1)
    Customer_name = models.CharField(max_length=120, blank=True, null=True)
    Customer_phone = models.CharField(max_length=120, blank=True, null=True)
    Total_overal_borrowed = models.CharField(max_length=120, blank=True, null=True)
    Total_individual_borrowed = models.CharField(max_length=120, blank=True, null=True)
    Total = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='delete')
    receipt = models.IntegerField(blank=False, default=0)   
    quantity_remained =  models.CharField(max_length=120, blank=True, null=True) 
    Product_serial =  models.CharField(max_length=120, blank=True, default=1) 
    # def get_date(self):
    #     return self.Tarehe.date()


class DukaMatumiziModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Description = models.CharField(max_length=820, blank=True, default=0)
    company = models.CharField(max_length=820, blank=True, default=0)
 

class Jobs(models.Model):
    Tarehe = models.DateTimeField(null=True,  )
    applicant_name = models.CharField(max_length=120, blank=True, null=True)
    birthdate = models.CharField(max_length=120, blank=True, default=0)
    location = models.CharField(max_length=820, blank=True, default=0)
    phone = models.CharField(max_length=820, blank=True, default=0)
    email = models.CharField(max_length=820, blank=True, default=0)
    myaddress = models.CharField(max_length=820, blank=True, default=0)
    reffered = models.CharField(max_length=820, blank=True, default=0)
    skills = models.CharField(max_length=820, blank=True, default=0)
    applied_for = models.CharField(max_length=820, blank=True, default=0)



class DukaSourceModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Description = models.CharField(max_length=820, blank=True, default=0)
    company = models.CharField(max_length=820, blank=True, default=0)
    # Tigopesa = models.CharField(max_length=120, blank=True, default=0)
    # Airtel_Money = models.CharField(max_length=120, blank=True, default=0)
    # KCB = models.CharField(max_length=120, blank=True, default=0)
    # Equity = models.CharField(max_length=120, blank=True, default=0)
    # TPB = models.CharField(max_length=120, blank=True, default=0)
    # NBC = models.CharField(max_length=120, blank=True, default=0)
    # NMB = models.CharField(max_length=120, blank=True, default=0)
    # SELCOM = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa_SubSuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Vodacom_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Vodacom_Agent2 = models.CharField(max_length=120, blank=True, default=0)
    # CRDB = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa = models.CharField(max_length=120, blank=True, default=0)
    # DTB = models.CharField(max_length=120, blank=True, default=0)
    # Access_Bank = models.CharField(max_length=120, blank=True, default=0)
    # Mkononi = models.CharField(max_length=120, blank=True, default=0)
    # Total = models.CharField(max_length=120, blank=True, default=0)
    # Output_Status = models.CharField(max_length=120, blank=True, default=0)
    # Status = models.CharField(max_length=120, blank=True, default=0)
    # Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    # Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    # TTCL_Money = models.CharField(max_length=120, blank=True, default=0)
    # Directors_name = models.CharField(max_length=120, blank=True, null=True)
    # body = models.CharField(max_length=820, blank=True, null=True)
    # Process = models.CharField(max_length=120, blank=True, null=True)

class OrderMatumiziModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Description = models.CharField(max_length=820, blank=True, default=0)
    # Tigopesa = models.CharField(max_length=120, blank=True, default=0)
    # Airtel_Money = models.CharField(max_length=120, blank=True, default=0)
    # KCB = models.CharField(max_length=120, blank=True, default=0)
    # Equity = models.CharField(max_length=120, blank=True, default=0)
    # TPB = models.CharField(max_length=120, blank=True, default=0)
    # NBC = models.CharField(max_length=120, blank=True, default=0)
    # NMB = models.CharField(max_length=120, blank=True, default=0)
    # SELCOM = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa_SubSuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Vodacom_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    # Vodacom_Agent2 = models.CharField(max_length=120, blank=True, default=0)
    # CRDB = models.CharField(max_length=120, blank=True, default=0)
    # Halopesa = models.CharField(max_length=120, blank=True, default=0)
    # DTB = models.CharField(max_length=120, blank=True, default=0)
    # Access_Bank = models.CharField(max_length=120, blank=True, default=0)
    # Mkononi = models.CharField(max_length=120, blank=True, default=0)
    # Total = models.CharField(max_length=120, blank=True, default=0)
    # Output_Status = models.CharField(max_length=120, blank=True, default=0)
    # Status = models.CharField(max_length=120, blank=True, default=0)
    # Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    # Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    # TTCL_Money = models.CharField(max_length=120, blank=True, default=0)
    # Directors_name = models.CharField(max_length=120, blank=True, null=True)
    # body = models.CharField(max_length=820, blank=True, null=True)
    # Process = models.CharField(max_length=120, blank=True, null=True)

class ValueChangeKilichobakiModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    MpesaWorking_Balance = models.CharField(max_length=120, blank=True, default=0)
    Mpesa_Float = models.CharField(max_length=120, blank=True, default=0)
    Tigopesa = models.CharField(max_length=120, blank=True, default=0)
    Airtel_Money = models.CharField(max_length=120, blank=True, default=0)
    KCB = models.CharField(max_length=120, blank=True, default=0)
    Equity = models.CharField(max_length=120, blank=True, default=0)
    TPB = models.CharField(max_length=120, blank=True, default=0)
    NBC = models.CharField(max_length=120, blank=True, default=0)
    NMB = models.CharField(max_length=120, blank=True, default=0)
    SELCOM = models.CharField(max_length=120, blank=True, default=0)
    Halopesa_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Halopesa_SubSuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Vodacom_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Vodacom_Agent2 = models.CharField(max_length=120, blank=True, default=0)
    CRDB = models.CharField(max_length=120, blank=True, default=0)
    Halopesa = models.CharField(max_length=120, blank=True, default=0)
    DTB = models.CharField(max_length=120, blank=True, default=0)
    Access_Bank = models.CharField(max_length=120, blank=True, default=0)
    Mkononi = models.CharField(max_length=120, blank=True, default=0)
    Total = models.CharField(max_length=120, blank=True, default=0)
    Output_Status = models.CharField(max_length=120, blank=True, default=0)
    Status = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    body = models.CharField(max_length=820, blank=True, null=True)
    Process = models.CharField(max_length=120, blank=True, null=True)

class WaklaMtajiModels(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    MpesaWorking_Balance = models.CharField(max_length=120, blank=True, default=0)
    Mpesa_Float = models.CharField(max_length=120, blank=True, default=0)
    Tigopesa = models.CharField(max_length=120, blank=True, default=0)
    Halopesa_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Halopesa_SubSuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Halopesa = models.CharField(max_length=120, blank=True, default=0)
    Vodacom_SuperAgent = models.CharField(max_length=120, blank=True, default=0)
    Vodacom_Agent2 = models.CharField(max_length=120, blank=True, default=0)
    Airtel_Money = models.CharField(max_length=120, blank=True, default=0)
    KCB = models.CharField(max_length=120, blank=True, default=0)
    Access_Bank = models.CharField(max_length=120, blank=True, default=0)
    Equity = models.CharField(max_length=120, blank=True, default=0)
    TPB = models.CharField(max_length=120, blank=True, default=0)
    NBC = models.CharField(max_length=120, blank=True, default=0)
    NMB = models.CharField(max_length=120, blank=True, default=0)
    SELCOM = models.CharField(max_length=120, blank=True, default=0)
    Mkononi = models.CharField(max_length=120, blank=True, default=0)
    Total = models.CharField(max_length=120, blank=True, default=0)
    Mtaji = models.CharField(max_length=120, blank=True, default=0)
    Commision = models.CharField(max_length=120, blank=True, default=0)
    Loss = models.CharField(max_length=120, blank=True, default=0)
    profit = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    body = models.CharField(max_length=820, blank=True, null=True)
    Process = models.CharField(max_length=120, blank=True, null=True)





class DukaProductsCategory(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    code=models.CharField(max_length=120, blank=True, null=True)
    name=models.CharField(max_length=120, blank=True, null=True)

class DukaProductsUnit(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    code=models.CharField(max_length=120, blank=True, null=True)
    name=models.CharField(max_length=120, blank=True, null=True)

class DukaProductsSuppliers(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    code=models.CharField(max_length=120, blank=True, null=True)
    name=models.CharField(max_length=120, blank=True, null=True)

class DukaProductsBalance(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    code=models.CharField(max_length=120, blank=True, null=True)
    name=models.CharField(max_length=120, blank=True, null=True)







class DukaProductsCategories(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    image=models.ImageField(blank=True, null=True)
    title=models.CharField(max_length=120, blank=True, null=True)

    def __init__(self, *args):
        super(DukaProductsCategories, self).__init__(*args)
        
class DukaProductsModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Expiration_date = models.CharField(max_length=120, blank=True, null=True)
    Last_Stock_Date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, null=True)
    Past_Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Last_Confirmed_Number_of_products = models.CharField(max_length=120, blank=True, null=True)
    Number_of_products =  models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True, default='0')
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True,  default=0)
    amountofproductval = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available_product_wise = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available = models.CharField(max_length=120, blank=True, default=0)
    photo = models.FileField(null=True)
    # profile = models.FileField(null=True)
    Total_profit = models.CharField(max_length=120, blank=True, default=0)
    Total_profit_product_wise = models.CharField(max_length=120, blank=True, default=0)
    Total_brought_product_wise = models.CharField(max_length=120, blank=True, default=0)
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    Wholesale_price = models.CharField(max_length=120, blank=True, default=0)
    Wholesale_profit = models.CharField(max_length=120, blank=True, default=0)
    Shelf_No = models.CharField(max_length=120, blank=True, null=True)
    carton = models.CharField(max_length=120, blank=True, default=0)
    category = models.CharField(max_length=120, blank=True, default=0)
    company = models.CharField(max_length=120, blank=True, default='Sokoni')
    Description = models.CharField(max_length=120, blank=True, default=0)
    # options_settings=models.ForeignKey(DukaProductSettings, to_field='company', on_delete=models.CASCADE, blank=True, default=company)
    Product_number = models.CharField(max_length=120, blank=True, default=0)
    Product_serial = models.CharField(max_length=120, blank=True, default=0)
    Type_of_product = models.CharField(max_length=120, blank=True, default=0)
    Number_of_products_sold = models.CharField(max_length=120, blank=True, default=0)
    status = models.CharField(max_length=120, blank=True, default='sold')

    def __str__(self):
        return self.Tarehe or f"#{self.pk}"

class DukaCart(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Expiration_date = models.CharField(max_length=120, blank=True, null=True)
    Last_Stock_Date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, null=True)
    Past_Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Last_Confirmed_Number_of_products = models.CharField(max_length=120, blank=True, null=True)
    Number_of_products =  models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True, default='0')
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True,  default=0)
    amountofproductval = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available_product_wise = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available = models.CharField(max_length=120, blank=True, default=0)
    photo = models.FileField(null=True)
    # profile = models.FileField(null=True)
    Total_profit = models.CharField(max_length=120, blank=True, default=0)
    Total_profit_product_wise = models.CharField(max_length=120, blank=True, default=0)
    Total_brought_product_wise = models.CharField(max_length=120, blank=True, default=0)
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    Wholesale_price = models.CharField(max_length=120, blank=True, default=0)
    Wholesale_profit = models.CharField(max_length=120, blank=True, default=0)
    Shelf_No = models.CharField(max_length=120, blank=True, null=True)
    carton = models.CharField(max_length=120, blank=True, default=0)
    category = models.CharField(max_length=120, blank=True, default=0)
    company = models.CharField(max_length=120, blank=True, default='Sokoni')
    Description = models.CharField(max_length=120, blank=True, default=0)
    # options_settings=models.ForeignKey(DukaProductSettings, to_field='company', on_delete=models.CASCADE, blank=True, default=company)
    Product_number = models.CharField(max_length=120, blank=True, default=0)
    Product_serial = models.CharField(max_length=120, blank=True, default=0)
    Type_of_product = models.CharField(max_length=120, blank=True, default=0)
    Number_of_products_sold = models.CharField(max_length=120, blank=True, default=0)
    status = models.CharField(max_length=120, blank=True, default='sold')
    cart_status = models.CharField(max_length=120, blank=True, default='pending')

    # def __str__(self):
    #     return self.Tarehe


class DukaProductsMovementModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Expiration_date = models.CharField(max_length=120, blank=True, null=True)
    Last_Stock_Date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, null=True)
    Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Last_Confirmed_Number_of_products = models.CharField(max_length=120, blank=True, null=True)
    Number_of_products =  models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True, default='0')
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True,  default=0)
    amountofproductval = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available_product_wise = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available = models.CharField(max_length=120, blank=True, default=0)
    Move_from = models.CharField(max_length=120, blank=True)
    Move_to = models.CharField(max_length=120, blank=True)
    Total_Available = models.CharField(max_length=120, blank=True, default=0)
    photo = models.FileField(null=True)
    # profile = models.FileField(null=True)
    Total_profit = models.CharField(max_length=120, blank=True, default=0)
    Total_profit_product_wise = models.CharField(max_length=120, blank=True, default=0)
    Total_brought_product_wise = models.CharField(max_length=120, blank=True, default=0)
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    Wholesale_price = models.CharField(max_length=120, blank=True, null=True)
    Wholesale_profit = models.CharField(max_length=120, blank=True, null=True)
    Shelf_No = models.CharField(max_length=120, blank=True, null=True)
    carton = models.CharField(max_length=120, blank=True, default=0)
    company = models.CharField(max_length=120, blank=True, default='Sokoni')
    Description = models.CharField(max_length=120, blank=True, default=0)
    Product_number = models.CharField(max_length=120, blank=True, default=0)
    Product_serial = models.CharField(max_length=120, blank=True, default=0)
    Type_of_product = models.CharField(max_length=120, blank=True, default=0)
    Number_of_products_sold = models.CharField(max_length=120, blank=True, default=0)
    status = models.CharField(max_length=120, blank=True, default='sold')

class DukaProductsOrderModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Product = models.CharField(max_length=120, blank=True, null=True)
    Quantity = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Typeproduct = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, null=True)
    Total = models.CharField(max_length=120, blank=True, null=True)
    Description = models.CharField(max_length=120, blank=True, null=True)
    company =  models.CharField(max_length=120, blank=True, null=True)
    officer = models.CharField(max_length=120, blank=True, null=True)
    
class DukaGeneralDeleteHistoryModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Product = models.CharField(max_length=120, blank=True, null=True)
    Quantity = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Typeproduct = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, null=True)
    Total = models.CharField(max_length=120, blank=True, null=True)
    Description = models.CharField(max_length=120, blank=True, null=True)
    company =  models.CharField(max_length=120, blank=True, null=True)
    officer = models.CharField(max_length=120, blank=True, null=True)
    
    
class DukaPaymentsModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    PayeeName = models.CharField(max_length=120, blank=True, null=True)
    TransactionId = models.CharField(max_length=120, blank=True, null=True)
    PymentProcessor = models.CharField(max_length=120, blank=True, null=True)
    AmountPaid = models.CharField(max_length=120, blank=True, null=True)
    TimeApproved = models.CharField(max_length=120, blank=True, null=True)
    Officer = models.CharField(max_length=120, blank=True, null=True)
    Description = models.CharField(max_length=120, blank=True, null=True)
    Remained =  models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='sold')


class DukaProductsAddedModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Last_Stock_Date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, null=True)
    Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Last_Confirmed_Number_of_products = models.CharField(max_length=120, blank=True, null=True)
    Number_of_products = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available_product_wise = models.CharField(max_length=120, blank=True,  default=0)
    Total_Available = models.CharField(max_length=120, blank=True, default=0)
    Total_profit = models.CharField(max_length=120, blank=True, default=0)
    Total_profit_product_wise = models.CharField(max_length=120, blank=True, default=0)
    Total_brought_product_wise = models.CharField(max_length=120, blank=True, default=0)
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    Wholesale_price = models.CharField(max_length=120, blank=True, null=True)
    Wholesale_profit = models.CharField(max_length=120, blank=True, null=True)
    Shelf_No = models.CharField(max_length=120, blank=True, null=True)
    carton = models.CharField(max_length=120, blank=True, default=0)
    company = models.CharField(max_length=120, blank=True, default='Sokoni')
    Description = models.CharField(max_length=120, blank=True, default=0)
    Product_number = models.CharField(max_length=120, blank=True, default=0)
    Product_serial = models.CharField(max_length=120, blank=True, default=0)
    Type_of_product = models.CharField(max_length=120, blank=True, default=0)
    Number_of_products_sold = models.CharField(max_length=120, blank=True, default=0)
    status = models.CharField(max_length=120, blank=True, default='sold')

class OrderProductsModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Last_Stock_Date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, null=True)
    Selling_price = models.CharField(max_length=120, blank=True, null=True)
    Last_Confirmed_Number_of_products = models.CharField(max_length=120, blank=True, null=True)
    Number_of_products = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Manager_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True, default=0)
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    order_type = models.CharField(max_length=120, blank=True, default=0)
    Location = models.CharField(max_length=120, blank=True, default=0)
    Package = models.CharField(max_length=120, blank=True, default=0)
    Number_in_Package = models.CharField(max_length=120, blank=True, default=0)


class DukaProductsSalesModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Product_seller = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, default=0)
    # Selling_price = models.CharField(max_length=120, blank=True, default=0)
    Selling_price = models.CharField(max_length=120, blank=True, default=0)
    Number_of_products = models.CharField(max_length=120, blank=True, default=0)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True, default=0)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Type_of_product = models.CharField(max_length=120, default='NEW')
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Number = models.CharField(max_length=120, blank=True, default=1)
    Customer_name = models.CharField(max_length=120, blank=True, null=True)
    Customer_phone = models.CharField(max_length=120, blank=True, null=True)
    Total = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='delete')
    receipt = models.IntegerField(blank=False, default=0)   
    quantity =  models.CharField(max_length=120, blank=True, default=1) 
    quantity_remained =  models.IntegerField(default=0) 
    Product_serial =  models.CharField(max_length=120, blank=True, default=1) 
    Description =  models.CharField(max_length=120, blank=True, default=1) 
    info =  models.CharField(max_length=120, blank=True, default='sold') 

class DukaProductsStockModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    Last_Stock_Date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
    Price_bought = models.CharField(max_length=120, blank=True, default=0)
    Selling_price = models.CharField(max_length=120, blank=True, default=0)
    Number_of_products = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Total_Purchased = models.CharField(max_length=120, blank=True, default=0)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    barcode = models.CharField(max_length=120, blank=True, null=True)
    Number = models.CharField(max_length=120, blank=True, default=1)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='delete')


# class DukaProductsSalesModel(models.Model):
#     Tarehe = models.CharField(max_length=120, blank=True, null=True)
#     user = models.CharField(max_length=120, blank=True, null=True)
#     Name_of_the_product = models.CharField(max_length=120, blank=True, null=True)
#     Price_bought = models.CharField(max_length=120, blank=True, null=True)
#     Selling_price = models.CharField(max_length=120, blank=True, null=True)
#     Number_of_products = models.CharField(max_length=120, blank=True, null=True)
#     Officer_worker = models.CharField(max_length=120, blank=True, null=True)
#     Wakala_name = models.CharField(max_length=120, blank=True, null=True)
#     Directors_name = models.CharField(max_length=120, blank=True, null=True)
#     barcode = models.CharField(max_length=120, blank=True, null=True)
#     Matumizi = models.CharField(max_length=120, blank=True, null=True)


class MatumiziWorkerModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, null=True)
    Jina = models.CharField(max_length=120, blank=True, null=True)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Salio = models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Process = models.CharField(max_length=120, blank=True, null=True)
    Matumizi = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)

class MadeniwkalaWorkerModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, null=True)
    Jina = models.CharField(max_length=120, blank=True, null=True)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Salio = models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Description = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, default='notpaid')
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)


class MadeniWorkerModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Amount = models.CharField(max_length=120, blank=True, null=True)
    Jina = models.CharField(max_length=120, blank=True, null=True)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Salio = models.CharField(max_length=120, blank=True, null=True)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)
    Process = models.CharField(max_length=120, blank=True, null=True)
    Deni = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)


class WakalaWorkerMtandaoModel(models.Model):
    Tarehe = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Mtandao = models.CharField(max_length=120, blank=True, null=True)
    # Mtandao2 = models.CharField(max_length=120, blank=True, null=True)
    # Mtandao3 = models.CharField(max_length=120, blank=True, null=True)
    # Mtandao4 = models.CharField(max_length=120, blank=True, null=True)
    # Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    # Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    # Directors_name = models.CharField(max_length=120, blank=True, null=True)
    # Process = models.CharField(max_length=120, blank=True, null=True)
    # Matumizi = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)
    # Tarehe = models.CharField(max_length=120, blank=True, null=True)


class JumlaWakalaModel(models.Model):
    username = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, default=0)
    Growthrate = models.CharField(max_length=120, blank=True, default=0)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Kinachotoka = models.CharField(max_length=120, blank=True, default=0)
    Kilichoingia = models.CharField(max_length=120, blank=True, default=0)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)


class JumlaWakalaWorkerModels(models.Model):
    username = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, default=0)
    Growthrate = models.CharField(max_length=120, blank=True, default=0)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Kinachotoka = models.CharField(max_length=120, blank=True, default=0)
    Kilichoingia = models.CharField(max_length=120, blank=True, default=0)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)


class JumlaWakalaDirectorModels(models.Model):
    username = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, default=0)
    Growthrate = models.CharField(max_length=120, blank=True, default=0)
    Amount = models.CharField(max_length=120, blank=True, default=0)
    Kinachotoka = models.CharField(max_length=120, blank=True, default=0)
    Kilichoingia = models.CharField(max_length=120, blank=True, default=0)
    Transaction_id = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, default=0)
    Officer_worker = models.CharField(max_length=120, blank=True, null=True)
    Wakala_name = models.CharField(max_length=120, blank=True, null=True)
    Directors_name = models.CharField(max_length=120, blank=True, null=True)

class WakalaTransactionsOverall(models.Model):
    wakala = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, default=0)
    Name_of_T_model = models.CharField(max_length=120, blank=True, null=True)
    Weekly = models.CharField(max_length=120, blank=True, null=True)
    Monthly = models.CharField(max_length=120, blank=True, null=True)
    Yealy = models.CharField(max_length=120, blank=True, null=True)
    Overall = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    Mmiliki_wakala = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    Jumla_kinachotoka = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Kinachoingia = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Faida = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Daily = models.CharField(max_length=120, blank=True, default=0)
    Branch_manager = models.CharField(max_length=120, blank=True, null=True)
    Branch_position = models.CharField(max_length=120, blank=True, null=True)
    Capital_roundly = models.CharField(max_length=120, blank=True, default=0)
    company = models.CharField(max_length=120, blank=True, null=True)
    Status = models.CharField(max_length=120, blank=True, default='Normal')
    Location = models.CharField(max_length=120, blank=True, null=True)
    Registered = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    Phone_No = models.CharField(max_length=120, blank=True, null=True)
    Customer_Served = models.CharField(max_length=120, blank=True, null=True)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Growth_rate = models.CharField(max_length=120, blank=True, default=0)
    Static_capital = models.CharField(max_length=120, blank=True,default=0)
    # service_officer = models.CharField(max_length=120, blank=True, null=True)


class WorkerTransactionsOverall(models.Model):
    worker = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, default=0)
    Name_of_T_model = models.CharField(max_length=120, blank=True, null=True)
    Daily = models.CharField(max_length=120, blank=True, default=0)
    Weekly = models.CharField(max_length=120, blank=True, default=0)
    Monthly = models.CharField(max_length=120, blank=True, default=0)
    Yealy = models.CharField(max_length=120, blank=True, default=0)
    Overall = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    Mmiliki_wakala = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    Jumla_kinachotoka = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Kinachoingia = models.CharField(max_length=120, blank=True, default=0)
    Handled = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Faida = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Daily = models.CharField(max_length=120, blank=True, default=0)
    Branch_manager = models.CharField(max_length=120, blank=True, null=True)
    Branch_position = models.CharField(max_length=120, blank=True, default=0)
    Capital_roundly = models.CharField(max_length=120, blank=True, default=0)
    company = models.CharField(max_length=120, blank=True, null=True)
    Status = models.CharField(max_length=120, blank=True, default='Normal')
    Location = models.CharField(max_length=120, blank=True, null=True)
    Registered = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    Phone_No = models.CharField(max_length=120, blank=True, null=True)
    Customer_Served = models.CharField(max_length=120, blank=True, default=0)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Static_capital = models.CharField(max_length=120, blank=True, default=0)
    Growth_rate = models.CharField(max_length=120, blank=True, default=0)
    # service_officer = models.CharField(max_length=120, blank=True, null=True)

class DirectorTransactionsOverall(models.Model):
    Director = models.CharField(max_length=120, blank=True, null=True)
    worker = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_pay = models.CharField(max_length=120, blank=True, default=0)
    Name_of_T_model = models.CharField(max_length=120, blank=True, null=True)
    Daily = models.CharField(max_length=120, blank=True, default=0)
    Weekly = models.CharField(max_length=120, blank=True, default=0)
    Monthly = models.CharField(max_length=120, blank=True, default=0)
    Yealy = models.CharField(max_length=120, blank=True, default=0)
    Overall = models.CharField(max_length=120, blank=True, null=True)
    receipt_no = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    Mmiliki_wakala = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    Jumla_kinachotoka = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Kinachoingia = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Faida = models.CharField(max_length=120, blank=True, default=0)
    Jumla_Daily = models.CharField(max_length=120, blank=True, default=0)
    Branch_manager = models.CharField(max_length=120, blank=True, null=True)
    Branch_position = models.CharField(max_length=120, blank=True, default=0)
    Capital_roundly = models.CharField(max_length=120, blank=True, default=0)
    company = models.CharField(max_length=120, blank=True, null=True)
    Status = models.CharField(max_length=120, blank=True, default='Normal')
    Location = models.CharField(max_length=120, blank=True, null=True)
    Registered = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    Phone_No = models.CharField(max_length=120, blank=True, null=True)
    Customer_Served = models.CharField(max_length=120, blank=True, default=0)
    Profit = models.CharField(max_length=120, blank=True, default=0)
    Static_capital = models.CharField(max_length=120, blank=True, default=0)
    Growth_rate = models.CharField(max_length=120, blank=True, default=0)
    # service_officer = models.CharField(max_length=120, blank=True, null=True)




class MalipoDeleted(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.DateTimeField( auto_now_add=True, auto_now=False)
    Total_pay = models.CharField(max_length=120, blank=True, null=True)
    loan_repay = models.IntegerField( blank=True, default='0')
    Interest_pay = models.CharField(max_length=120, blank=True, null=True)
    Balance = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    kipindi = models.CharField(max_length=120, blank=True, null=True)
    kilichokopwa = models.CharField(max_length=120, blank=True, null=True)
    tangu = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    day = models.CharField(max_length=120, blank=True, null=True)
    awamu = models.CharField(max_length=120, blank=True, null=True)
    Registration_no = models.CharField(max_length=120, blank=True, null=True)
    rangi = models.CharField(max_length=120, blank=True, default='red')


class FormMkopo(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.CharField(max_length=120, blank=True, null=True)
    Total_mkopo = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    Riba = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    RealMkopo = models.CharField(max_length=120, blank=True, null=True)
    jumla = models.IntegerField(blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    Miezi = models.CharField(max_length=120, blank=True, null=True)
    pin= models.CharField(max_length=120, blank=True, null=True)
    mw1= models.CharField(max_length=120, blank=True, null=True)
    mw2= models.CharField(max_length=120, blank=True, null=True)
    mw3= models.CharField(max_length=120, blank=True, null=True)
    mw4= models.CharField(max_length=120, blank=True, null=True)
    mw4= models.CharField(max_length=120, blank=True, null=True)
    mw5= models.CharField(max_length=120, blank=True, null=True)
    mw6= models.CharField(max_length=120, blank=True, null=True)
    mw7= models.CharField(max_length=120, blank=True, null=True)
    mw8= models.CharField(max_length=120, blank=True, null=True)
    mw9= models.CharField(max_length=120, blank=True, null=True)
    mw10= models.CharField(max_length=120, blank=True, null=True)
    mw11= models.CharField(max_length=120, blank=True, null=True)
    mw12= models.CharField(max_length=120, blank=True, null=True)
    mwezi1 = models.CharField(max_length=120, blank=True, null=True)
    mwezi2 = models.CharField(max_length=120, blank=True, null=True)
    mwezi3 = models.CharField(max_length=120, blank=True, null=True)
    mwezi4 = models.CharField(max_length=120, blank=True, null=True)
    mwezi5 = models.CharField(max_length=120, blank=True, null=True)
    mwezi6 = models.CharField(max_length=120, blank=True, null=True)
    mwezi7 = models.CharField(max_length=120, blank=True, null=True)
    mwezi8 = models.CharField(max_length=120, blank=True, null=True)
    mwezi9 = models.CharField(max_length=120, blank=True, null=True)
    mwezi10 = models.CharField(max_length=120, blank=True, null=True)
    mwezi11 = models.CharField(max_length=120, blank=True, null=True)
    mwezi12 = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    day = models.CharField(max_length=120, blank=True, null=True)


class LoanInstallment(models.Model):
    loan = models.ForeignKey(FormMkopo, related_name='installments', on_delete=models.CASCADE)
    sequence = models.PositiveSmallIntegerField()
    due_date = models.DateField()
    scheduled_amount = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    promised_date = models.DateField(blank=True, null=True)
    promise_note = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['due_date', 'sequence', 'pk']
        unique_together = [('loan', 'sequence')]


class PaymentAllocation(models.Model):
    payment = models.ForeignKey(Malipo, related_name='installment_allocations', on_delete=models.CASCADE)
    installment = models.ForeignKey(LoanInstallment, related_name='payment_allocations', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=14, decimal_places=2)

    class Meta:
        unique_together = [('payment', 'installment')]


def set_payment_loan_start_date(instance):
    """Store the start date of the loan receiving this payment in Malipo.tangu."""
    allocation = PaymentAllocation.objects.filter(
        payment=instance,
    ).exclude(
        payment__info__in=['delete', 'deleted'],
    ).select_related(
        'installment__loan',
    ).order_by(
        'installment__due_date', 'installment__loan_id', 'installment__sequence', 'pk',
    ).first()
    if allocation is None:
        return

    loan_start_date = (allocation.installment.loan.tarehe or '').strip()
    if not loan_start_date or instance.tangu == loan_start_date:
        return

    Malipo.objects.filter(pk=instance.pk).update(tangu=loan_start_date)
    instance.tangu = loan_start_date


def _installment_amount(value):
    try:
        return Decimal(str(value or '0').replace(',', '')).quantize(Decimal('0.01'))
    except (InvalidOperation, ValueError):
        return Decimal('0.00')


@receiver(post_save, sender=FormMkopo)
def create_loan_installments(sender, instance, created, **kwargs):
    if not created:
        return

    month_names = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December']
    try:
        year = int(instance.mwaka)
    except (TypeError, ValueError):
        year = 0
    if year < 1 or year > 9999:
        try:
            year = datetime.strptime(str(instance.tarehe)[:10], '%Y-%m-%d').year
        except (TypeError, ValueError):
            year = timezone.localdate().year
    try:
        day = int(instance.day)
    except (TypeError, ValueError):
        try:
            day = datetime.strptime(str(instance.tarehe)[:10], '%Y-%m-%d').day
        except (TypeError, ValueError):
            day = 1

    previous_month = None
    for sequence in range(1, 13):
        month_name = str(getattr(instance, 'mwezi%s' % sequence, '') or '').strip()
        month = next((index for index, name in enumerate(month_names, 1)
                      if name.lower() == month_name.lower()), None)
        amount = _installment_amount(getattr(instance, 'mw%s' % sequence, None))
        if month is None or amount <= 0:
            continue
        if previous_month is not None and month < previous_month:
            year += 1
        previous_month = month
        due_day = min(max(day, 1), calendar.monthrange(year, month)[1])
        LoanInstallment.objects.get_or_create(
            loan=instance,
            sequence=sequence,
            defaults={'due_date': datetime(year, month, due_day).date(), 'scheduled_amount': amount}
        )


def allocate_payment_to_installments(instance):
    if instance.route != 'weka' or instance.info in ('delete', 'deleted'):
        return
    amount = _installment_amount(instance.loan_repay)
    if amount <= 0:
        amount = _installment_amount(instance.Total_pay)
    if amount <= 0:
        return

    already_allocated = sum(
        instance.installment_allocations.exclude(payment__info__in=['delete', 'deleted']).values_list('amount', flat=True),
        Decimal('0.00'),
    )
    amount = max(Decimal('0.00'), amount - already_allocated)
    if amount <= 0:
        return

    loans = FormMkopo.objects.filter(user=instance.user, Account_no=instance.Account_no)
    if instance.company:
        loans = loans.filter(company=instance.company)
    installments = LoanInstallment.objects.filter(loan__in=loans).select_related('loan').order_by('due_date', 'loan_id', 'sequence')
    for installment in installments:
        allocated = sum(installment.payment_allocations.exclude(payment__info__in=['delete', 'deleted']).values_list('amount', flat=True), Decimal('0.00'))
        outstanding = max(Decimal('0.00'), installment.scheduled_amount - allocated)
        if outstanding <= 0:
            continue
        allocation = min(amount, outstanding)
        PaymentAllocation.objects.get_or_create(
            payment=instance,
            installment=installment,
            defaults={'amount': allocation}
        )
        amount -= allocation
        if amount <= 0:
            break


def customer_company(register):
    """The company a customer belongs to.

    Customers registered on "Ongeza Account" were saved without a company, while their loans
    carry the lender's company. Use the customer's own company, otherwise the company of
    their latest loan, so loans and repayments are counted under the same company.
    """
    if register is None:
        return None
    if register.company_username:
        return register.company_username
    loan = FormMkopo.objects.filter(user=register.Username).exclude(company__isnull=True).exclude(company='').order_by('-pk').first()
    if loan is not None:
        return loan.company
    return None


def installments_left(user, account_no=None, company=None):
    """How many installments of this customer still have money owing.

    A short payment (e.g. 100,000 of 130,000) leaves that month owing, so it still counts;
    the shortfall is paid first by the next payment (carry over).
    """
    loans = FormMkopo.objects.filter(user=user)
    if account_no:
        loans = loans.filter(Account_no=account_no)
    if company:
        loans = loans.filter(company=company)
    left = 0
    for installment in LoanInstallment.objects.filter(loan__in=loans):
        paid = sum(
            installment.payment_allocations.exclude(payment__info__in=['delete', 'deleted']).values_list('amount', flat=True),
            Decimal('0.00'),
        )
        if installment.scheduled_amount - paid > 0:
            left += 1
    return left


@receiver(post_save, sender=Malipo)
def allocate_loan_payment(sender, instance, created, **kwargs):
    if not created:
        return
    allocate_payment_to_installments(instance)
    if instance.route == 'weka' and instance.info not in ('delete', 'deleted'):
        set_payment_loan_start_date(instance)


class Siku(models.Model):
    company = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    tr1 = models.CharField(max_length=120, blank=True, default= 0)
    tr2 = models.CharField(max_length=120, blank=True, default= 0)
    tr3 = models.CharField(max_length=120, blank=True, default= 0)
    tr4 = models.CharField(max_length=120, blank=True, default= 0)
    tr5 = models.CharField(max_length=120, blank=True, default= 0)
    tr6 = models.CharField(max_length=120, blank=True, default= 0)
    tr7 = models.CharField(max_length=120, blank=True, default= 0)
    tr8 = models.CharField(max_length=120, blank=True, default= 0)
    tr9 = models.CharField(max_length=120, blank=True, default= 0)
    tr10 = models.CharField(max_length=120, blank=True, default= 0)
    tr11 = models.CharField(max_length=120, blank=True, default= 0)
    tr12 = models.CharField(max_length=120, blank=True, default= 0)
    tr13 = models.CharField(max_length=120, blank=True, default= 0)
    tr14 = models.CharField(max_length=120, blank=True, default= 0)
    tr15 = models.CharField(max_length=120, blank=True, default= 0)
    tr16 = models.CharField(max_length=120, blank=True, default= 0)
    tr17 = models.CharField(max_length=120, blank=True, default= 0)
    tr18 = models.CharField(max_length=120, blank=True, default= 0)
    tr19 = models.CharField(max_length=120, blank=True, default= 0)
    tr20 = models.CharField(max_length=120, blank=True, default= 0)
    tr21 = models.CharField(max_length=120, blank=True, default= 0)
    tr22 = models.CharField(max_length=120, blank=True, default= 0)
    tr23 = models.CharField(max_length=120, blank=True, default= 0)
    tr24 = models.CharField(max_length=120, blank=True, default= 0)
    tr25 = models.CharField(max_length=120, blank=True, default= 0)
    tr26 = models.CharField(max_length=120, blank=True, default= 0)
    tr27 = models.CharField(max_length=120, blank=True, default= 0)
    tr28 = models.CharField(max_length=120, blank=True, default= 0)
    tr29 = models.CharField(max_length=120, blank=True, default= 0)
    tr30 = models.CharField(max_length=120, blank=True, default= 0)
    tr31 = models.CharField(max_length=120, blank=True, default= 0)
    # mwezi9 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi10 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi11 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi12 = models.CharField(max_length=120, blank=True, null=True)
    # mwaka = models.CharField(max_length=120, blank=True, null=True)

class SikuMicrofinance(models.Model):
    company = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    tr1 = models.CharField(max_length=120, blank=True, default= 0)
    tr2 = models.CharField(max_length=120, blank=True, default= 0)
    tr3 = models.CharField(max_length=120, blank=True, default= 0)
    tr4 = models.CharField(max_length=120, blank=True, default= 0)
    tr5 = models.CharField(max_length=120, blank=True, default= 0)
    tr6 = models.CharField(max_length=120, blank=True, default= 0)
    tr7 = models.CharField(max_length=120, blank=True, default= 0)
    tr8 = models.CharField(max_length=120, blank=True, default= 0)
    tr9 = models.CharField(max_length=120, blank=True, default= 0)
    tr10 = models.CharField(max_length=120, blank=True, default= 0)
    tr11 = models.CharField(max_length=120, blank=True, default= 0)
    tr12 = models.CharField(max_length=120, blank=True, default= 0)
    tr13 = models.CharField(max_length=120, blank=True, default= 0)
    tr14 = models.CharField(max_length=120, blank=True, default= 0)
    tr15 = models.CharField(max_length=120, blank=True, default= 0)
    tr16 = models.CharField(max_length=120, blank=True, default= 0)
    tr17 = models.CharField(max_length=120, blank=True, default= 0)
    tr18 = models.CharField(max_length=120, blank=True, default= 0)
    tr19 = models.CharField(max_length=120, blank=True, default= 0)
    tr20 = models.CharField(max_length=120, blank=True, default= 0)
    tr21 = models.CharField(max_length=120, blank=True, default= 0)
    tr22 = models.CharField(max_length=120, blank=True, default= 0)
    tr23 = models.CharField(max_length=120, blank=True, default= 0)
    tr24 = models.CharField(max_length=120, blank=True, default= 0)
    tr25 = models.CharField(max_length=120, blank=True, default= 0)
    tr26 = models.CharField(max_length=120, blank=True, default= 0)
    tr27 = models.CharField(max_length=120, blank=True, default= 0)
    tr28 = models.CharField(max_length=120, blank=True, default= 0)
    tr29 = models.CharField(max_length=120, blank=True, default= 0)
    tr30 = models.CharField(max_length=120, blank=True, default= 0)
    tr31 = models.CharField(max_length=120, blank=True, default= 0)
    # mwezi9 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi10 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi11 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi12 = models.CharField(max_length=120, blank=True, null=True)
    # mwaka = models.CharField(max_length=120, blank=True, null=True)

class SikuToaMicrofinance(models.Model):
    company = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    tr1 = models.CharField(max_length=120, blank=True, default= 0)
    tr2 = models.CharField(max_length=120, blank=True, default= 0)
    tr3 = models.CharField(max_length=120, blank=True, default= 0)
    tr4 = models.CharField(max_length=120, blank=True, default= 0)
    tr5 = models.CharField(max_length=120, blank=True, default= 0)
    tr6 = models.CharField(max_length=120, blank=True, default= 0)
    tr7 = models.CharField(max_length=120, blank=True, default= 0)
    tr8 = models.CharField(max_length=120, blank=True, default= 0)
    tr9 = models.CharField(max_length=120, blank=True, default= 0)
    tr10 = models.CharField(max_length=120, blank=True, default= 0)
    tr11 = models.CharField(max_length=120, blank=True, default= 0)
    tr12 = models.CharField(max_length=120, blank=True, default= 0)
    tr13 = models.CharField(max_length=120, blank=True, default= 0)
    tr14 = models.CharField(max_length=120, blank=True, default= 0)
    tr15 = models.CharField(max_length=120, blank=True, default= 0)
    tr16 = models.CharField(max_length=120, blank=True, default= 0)
    tr17 = models.CharField(max_length=120, blank=True, default= 0)
    tr18 = models.CharField(max_length=120, blank=True, default= 0)
    tr19 = models.CharField(max_length=120, blank=True, default= 0)
    tr20 = models.CharField(max_length=120, blank=True, default= 0)
    tr21 = models.CharField(max_length=120, blank=True, default= 0)
    tr22 = models.CharField(max_length=120, blank=True, default= 0)
    tr23 = models.CharField(max_length=120, blank=True, default= 0)
    tr24 = models.CharField(max_length=120, blank=True, default= 0)
    tr25 = models.CharField(max_length=120, blank=True, default= 0)
    tr26 = models.CharField(max_length=120, blank=True, default= 0)
    tr27 = models.CharField(max_length=120, blank=True, default= 0)
    tr28 = models.CharField(max_length=120, blank=True, default= 0)
    tr29 = models.CharField(max_length=120, blank=True, default= 0)
    tr30 = models.CharField(max_length=120, blank=True, default= 0)
    tr31 = models.CharField(max_length=120, blank=True, default= 0)
    # mwezi9 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi10 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi11 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi12 = models.CharField(max_length=120, blank=True, null=True)
    # mwaka = models.CharField(max_length=120, blank=True, null=True)
class SikuKopesha(models.Model):
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    tr1 = models.CharField(max_length=120, blank=True, default= 0)
    tr2 = models.CharField(max_length=120, blank=True, default= 0)
    tr3 = models.CharField(max_length=120, blank=True, default= 0)
    tr4 = models.CharField(max_length=120, blank=True, default= 0)
    tr5 = models.CharField(max_length=120, blank=True, default= 0)
    tr6 = models.CharField(max_length=120, blank=True, default= 0)
    tr7 = models.CharField(max_length=120, blank=True, default= 0)
    tr8 = models.CharField(max_length=120, blank=True, default= 0)
    tr9 = models.CharField(max_length=120, blank=True, default= 0)
    tr10 = models.CharField(max_length=120, blank=True, default= 0)
    tr11 = models.CharField(max_length=120, blank=True, default= 0)
    tr12 = models.CharField(max_length=120, blank=True, default= 0)
    tr13 = models.CharField(max_length=120, blank=True, default= 0)
    tr14 = models.CharField(max_length=120, blank=True, default= 0)
    tr15 = models.CharField(max_length=120, blank=True, default= 0)
    tr16 = models.CharField(max_length=120, blank=True, default= 0)
    tr17 = models.CharField(max_length=120, blank=True, default= 0)
    tr18 = models.CharField(max_length=120, blank=True, default= 0)
    tr19 = models.CharField(max_length=120, blank=True, default= 0)
    tr20 = models.CharField(max_length=120, blank=True, default= 0)
    tr21 = models.CharField(max_length=120, blank=True, default= 0)
    tr22 = models.CharField(max_length=120, blank=True, default= 0)
    tr23 = models.CharField(max_length=120, blank=True, default= 0)
    tr24 = models.CharField(max_length=120, blank=True, default= 0)
    tr25 = models.CharField(max_length=120, blank=True, default= 0)
    tr26 = models.CharField(max_length=120, blank=True, default= 0)
    tr27 = models.CharField(max_length=120, blank=True, default= 0)
    tr28 = models.CharField(max_length=120, blank=True, default= 0)
    tr29 = models.CharField(max_length=120, blank=True, default= 0)
    tr30 = models.CharField(max_length=120, blank=True, default= 0)
    tr31 = models.CharField(max_length=120, blank=True, default= 0)
    # mwezi9 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi10 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi11 = models.CharField(max_length=120, blank=True, null=True)
    # mwezi12 = models.CharField(max_length=120, blank=True, null=True)
    # mwaka = models.CharField(max_length=120, blank=True, null=True)

class MessageInfo(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    jina = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.DateTimeField( auto_now_add=True, auto_now=False)
    Total_mkopo = models.CharField(max_length=120, blank=True, null=True)
    Riba = models.CharField(max_length=120, blank=True, null=True)
    RealMkopo = models.CharField(max_length=120, blank=True, null=True)
    Simu = models.CharField(max_length=120, blank=True, null=True)
    Account_no = models.CharField(max_length=120, blank=True, null=True)
    meseji = models.CharField(max_length=120, blank=True, null=True)
    jumla = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, null=True)
    Miezi = models.CharField(max_length=120, blank=True, null=True)
    mw1= models.CharField(max_length=120, blank=True, null=True)
    mw2= models.CharField(max_length=120, blank=True, null=True)
    mw3= models.CharField(max_length=120, blank=True, null=True)
    mw4= models.CharField(max_length=120, blank=True, null=True)
    mw4= models.CharField(max_length=120, blank=True, null=True)
    mw5= models.CharField(max_length=120, blank=True, null=True)
    mw6= models.CharField(max_length=120, blank=True, null=True)
    mw7= models.CharField(max_length=120, blank=True, null=True)
    mw8= models.CharField(max_length=120, blank=True, null=True)
    mw9= models.CharField(max_length=120, blank=True, null=True)
    mw10= models.CharField(max_length=120, blank=True, null=True)
    mw11= models.CharField(max_length=120, blank=True, null=True)
    mw12= models.CharField(max_length=120, blank=True, null=True)
    mwezi1 = models.CharField(max_length=120, blank=True, null=True)
    mwezi2 = models.CharField(max_length=120, blank=True, null=True)
    mwezi3 = models.CharField(max_length=120, blank=True, null=True)
    mwezi4 = models.CharField(max_length=120, blank=True, null=True)
    mwezi5 = models.CharField(max_length=120, blank=True, null=True)
    mwezi6 = models.CharField(max_length=120, blank=True, null=True)
    mwezi7 = models.CharField(max_length=120, blank=True, null=True)
    mwezi8 = models.CharField(max_length=120, blank=True, null=True)
    mwezi9 = models.CharField(max_length=120, blank=True, null=True)
    mwezi10 = models.CharField(max_length=120, blank=True, null=True)
    mwezi11 = models.CharField(max_length=120, blank=True, null=True)
    mwezi12 = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)




class Jumla(models.Model):
    Total_balance = models.IntegerField(blank=True, default=0)
    Rejesho_mwezi = models.IntegerField(blank=True, default=0)
    Mkopo = models.IntegerField(blank=True, default=0)

class JumlaNyumba(models.Model):
    Total_balance = models.IntegerField(blank=True, default=0)
    Rejesho_mwezi = models.IntegerField(blank=True, default=0)
    Mkopo = models.IntegerField(blank=True, default=0)

class JumlaMicrofinance(models.Model):
    company = models.CharField(max_length=120, blank=True, null=True)
    Total_balance = models.CharField(blank=True, max_length=120, default=0)
    Rejesho_mwezi = models.CharField(blank=True, max_length=120, default=0)
    Mkopo = models.CharField(blank=True, max_length=120, default=0)
    Faida = models.CharField(blank=True, max_length=120, default=0)

class UserInfo(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Riba = models.IntegerField(blank=True, default='0')
    Balance = models.IntegerField(blank=True, default='0')
    mwezi = models.IntegerField(blank=True, default='0')
    mkopo = models.IntegerField(blank=True, default='0')
    Faida = models.IntegerField(blank=True, default='0')
    Rejesho_mwezi = models.IntegerField(blank=True, default='0')
    Balance_Cash = models.IntegerField(blank=True, default='0')

class UserInfoNyumba(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Jumla_malipo = models.CharField(max_length=120, blank=True, default='0')
    Jumla_priceDays = models.CharField(max_length=120, blank=True, default='0')
    Madai = models.CharField(max_length=120, blank=True, default='0')
    mkopo = models.CharField(max_length=120, blank=True, default='0')
    Faida = models.CharField(max_length=120, blank=True, default='0')
    Rejesho_mwezi = models.CharField(max_length=120, blank=True, default='0')

class UserInfoNyumbaAll(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Jumla_malipo = models.CharField(max_length=120, blank=True, default='0')
    Jumla_priceDays = models.CharField(max_length=120, blank=True, default='0')
    Madai = models.CharField(max_length=120, blank=True, default='0')
    mkopo = models.CharField(max_length=120, blank=True, default='0')
    Faida = models.CharField(max_length=120, blank=True, default='0')
    Rejesho_mwezi = models.CharField(max_length=120, blank=True, default='0')

class UserInfoNyumbaAllThem(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Jumla_malipo = models.CharField(max_length=120, blank=True, default='0')
    Jumla_priceDays = models.CharField(max_length=120, blank=True, default='0')
    Madai = models.CharField(max_length=120, blank=True, default='0')
    mkopo = models.CharField(max_length=120, blank=True, default='0')
    Faida = models.CharField(max_length=120, blank=True, default='0')
    Balance = models.CharField(max_length=120, blank=True, default='0')
    Rejesho_mwezi = models.CharField(max_length=120, blank=True, default='0')


class Taarifa(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Jumla_malipo = models.IntegerField(blank=True, default='0')
    Jumla_priceDays = models.IntegerField(blank=True, default='0')
    Madai = models.IntegerField(blank=True, default='0')
    mkopo = models.IntegerField(blank=True, default='0')
    Faida = models.IntegerField(blank=True, default='0')
    Rejesho_mwezi = models.IntegerField(blank=True, default='0')


class BankStatement(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    bankstatement = models.FileField()


class IdentityCard(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    idcard = models.FileField()

class AtmCard(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    Atm = models.FileField()

class Slip(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    slip = models.FileField()

class OwnerMkataba(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    Mkataba = models.FileField()


class OwnerKitambulisho(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    Kitambulisho = models.FileField()

class OwnerApplication(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    Application = models.FileField()

class OwnerSlip(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    Slip = models.FileField()




class Profile(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    photo = models.FileField()

class ProfileNyumba(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    photo = models.FileField()

class SugestionsModel(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Room = models.CharField(max_length=120, blank=True, null=True)
    Sugestion = models.CharField(max_length=120, blank=True, null=True)
    Phone = models.CharField(max_length=120, blank=True, null=True)
    House_Owner = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False, null=True)
    photo = models.FileField(blank=True, null=True)

class OrderSugestionsModel(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Manager = models.CharField(max_length=120, blank=True, null=True)
    Director = models.CharField(max_length=120, blank=True, null=True)
    Phone = models.CharField(max_length=120, blank=True, null=True)
    Message = models.CharField(max_length=120, blank=True, null=True)
    Sender = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField( auto_now_add=True, auto_now=False, null=True)
    photo = models.FileField(blank=True, null=True)

class Nyumba(models.Model):
    name = models.CharField(max_length=120, blank=True, null=True)
    simu = models.CharField(max_length=120, blank=True, null=True)
    Account_number = models.CharField(max_length=120, blank=True, null=True)
    nyumba_number = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    eneo = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    wapangaji_current = models.CharField(max_length=120, blank=True, null=True)
    wapangaji_max = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    House_Owner = models.CharField(max_length=120, blank=True, null=True)
    nyumbaname = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    # file_no = models.CharField(max_length=120, blank=True, null=True)
  

class MarekebishoNyumba(models.Model):
    nyumba = models.CharField(max_length=120, blank=True, null=True)
    mfanyaji_kazi = models.CharField(max_length=120, blank=True, null=True)
    mkaguzi_wa_kazi = models.CharField(max_length=120, blank=True, null=True)
    Eneo_la_kazi = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.DateTimeField(auto_now_add=True, auto_now=False, null=True)
    kiasi_kilichotumika = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    simu = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    Account_number = models.CharField(max_length=120, blank=True, null=True)
    nyumba_number = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    eneo = models.CharField(max_length=120, blank=True, null=True)
    wapangaji_current = models.CharField(max_length=120, blank=True, null=True)
    wapangaji_max = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)

class Miezi(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
  
  

class MieziToa(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
class MieziMicrofinance(models.Model):
    company = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
  
  

class MieziToaMicrofinance(models.Model):
    company = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
  

class PersonalToa(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    mwaka =  models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
  

class HouseOwnerMiezi(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    mwaka =  models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
class HouseOwnerInfo(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Jumla_malipo = models.IntegerField(blank=True, default='0')
    Madeni = models.IntegerField(blank=True, default='0')
    Deposited = models.IntegerField(blank=True, default='0')
    Withdrawn = models.IntegerField(blank=True, default='0')
    Balance = models.IntegerField(blank=True, default='0')
    Rejesho_mwezi = models.IntegerField(blank=True, default='0')
    
class HouseOwnerDay(models.Model):
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    tr1 = models.CharField(max_length=120, blank=True, default= 0)
    tr2 = models.CharField(max_length=120, blank=True, default= 0)
    tr3 = models.CharField(max_length=120, blank=True, default= 0)
    tr4 = models.CharField(max_length=120, blank=True, default= 0)
    tr5 = models.CharField(max_length=120, blank=True, default= 0)
    tr6 = models.CharField(max_length=120, blank=True, default= 0)
    tr7 = models.CharField(max_length=120, blank=True, default= 0)
    tr8 = models.CharField(max_length=120, blank=True, default= 0)
    tr9 = models.CharField(max_length=120, blank=True, default= 0)
    tr10 = models.CharField(max_length=120, blank=True, default= 0)
    tr11 = models.CharField(max_length=120, blank=True, default= 0)
    tr12 = models.CharField(max_length=120, blank=True, default= 0)
    tr13 = models.CharField(max_length=120, blank=True, default= 0)
    tr14 = models.CharField(max_length=120, blank=True, default= 0)
    tr15 = models.CharField(max_length=120, blank=True, default= 0)
    tr16 = models.CharField(max_length=120, blank=True, default= 0)
    tr17 = models.CharField(max_length=120, blank=True, default= 0)
    tr18 = models.CharField(max_length=120, blank=True, default= 0)
    tr19 = models.CharField(max_length=120, blank=True, default= 0)
    tr20 = models.CharField(max_length=120, blank=True, default= 0)
    tr21 = models.CharField(max_length=120, blank=True, default= 0)
    tr22 = models.CharField(max_length=120, blank=True, default= 0)
    tr23 = models.CharField(max_length=120, blank=True, default= 0)
    tr24 = models.CharField(max_length=120, blank=True, default= 0)
    tr25 = models.CharField(max_length=120, blank=True, default= 0)
    tr26 = models.CharField(max_length=120, blank=True, default= 0)
    tr27 = models.CharField(max_length=120, blank=True, default= 0)
    tr28 = models.CharField(max_length=120, blank=True, default= 0)
    tr29 = models.CharField(max_length=120, blank=True, default= 0)
    tr30 = models.CharField(max_length=120, blank=True, default= 0)
    tr31 = models.CharField(max_length=120, blank=True, default= 0)



class PersonalWeka(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
  
  

class MieziToaNyumba(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
  
  
  

class MieziNyumba(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
  
  

class NyumbaInfo(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    nyumba = models.CharField(max_length=120, blank=True, null=True)
    Faida = models.CharField(max_length=120, blank=True, default= 0)
    Returns = models.CharField(max_length=120, blank=True, default= 0)
    mwezi = models.CharField(max_length=120, blank=True, default= 0)
    mwaka = models.CharField(max_length=120, blank=True, default= 0)
    January = models.CharField(max_length=120, blank=True, default= 0)
    February = models.CharField(max_length=120, blank=True, default= 0)
    March = models.CharField(max_length=120, blank=True, default= 0)
    April= models.CharField(max_length=120, blank=True, default= 0)
    May= models.CharField(max_length=120, blank=True, default= 0)
    June = models.CharField(max_length=120, blank=True, default= 0)
    July = models.CharField(max_length=120, blank=True, default= 0)
    August = models.CharField(max_length=120, blank=True, default= 0)
    September = models.CharField(max_length=120, blank=True, default= 0)
    October = models.CharField(max_length=120, blank=True, default= 0)
    November = models.CharField(max_length=120, blank=True, default= 0)
    December = models.CharField(max_length=120, blank=True, default= 0)
    
  
  

class MarekebishoDeleted(models.Model):
    nyumba = models.CharField(max_length=120, blank=True, null=True)
    mfanyaji_kazi = models.CharField(max_length=120, blank=True, null=True)
    mkaguzi_wa_kazi = models.CharField(max_length=120, blank=True, null=True)
    Eneo_la_kazi = models.CharField(max_length=120, blank=True, null=True)
    tarehe = models.DateTimeField(auto_now_add=True, auto_now=False, null=True)
    kiasi_kilichotumika = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    simu = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    Account_number = models.CharField(max_length=120, blank=True, null=True)
    nyumba_number = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    eneo = models.CharField(max_length=120, blank=True, null=True)
    wapangaji_current = models.CharField(max_length=120, blank=True, null=True)
    wapangaji_max = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
  

class wapangaji(models.Model):
    date = models.CharField(max_length=120, blank=True, null=True)
    last_date = models.CharField(max_length=120, blank=True, null=True)
    name = models.CharField(max_length=120, blank=True, null=True)
    full_name = models.CharField(max_length=120, blank=True, null=True)
    nyumbaname = models.CharField(max_length=120, blank=True, null=True)
    simu = models.CharField(max_length=120, blank=True, null=True)
    # Account_number = models.CharField(max_length=120, blank=True, null=True)
    nyumba_number = models.CharField(max_length=120, blank=True, null=True)
    shughuri = models.CharField(max_length=120, choices = shughurii, blank=True, null=True)
    ulipoajiriwa = models.CharField(max_length=120, blank=True, null=True)
    idara = models.CharField(max_length=120, blank=True, null=True)
    daily = models.CharField(max_length=120, blank=True, null=True)
    deni = models.CharField(max_length=720, blank=True, default=0)
    anwani = models.CharField(max_length=120, blank=True, null=True)
    wilaya_kikazi = models.CharField(max_length=120, blank=True, null=True)
    aina_ya_chumba = models.CharField(max_length=120, blank=True, choices = aina_chumba, null=True)
    payment_option = models.CharField(max_length=120, blank=True, null=True)
    matumizi = models.CharField(max_length=120, blank=True, null=True)
    kulipia = models.CharField(max_length=120, blank=True, null=True)
    kiasi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    eneo = models.CharField(max_length=120, blank=True, null=True)
    malipo = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    nyumbaid = models.CharField(max_length=120, blank=True, null=True)
    file_no = models.CharField(max_length=120, blank=True, null=True)
    muda = models.CharField(max_length=120, blank=True, null=True)
    # wapangaji_max = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    jina_mdhamini = models.CharField(max_length=120, blank=True, null=True)
    House_Owner = models.CharField(max_length=120, blank=True, null=True)
    cheo = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, null=True)
    simu_dalali = models.CharField(max_length=120, blank=True, null=True)
    baki = models.CharField(max_length=120, blank=True, null=True)
    mwezi1 = models.CharField(max_length=120, blank=True, null=True)
    miezi2 = models.CharField(max_length=120, blank=True, null=True)
    miezi3 = models.CharField(max_length=120, blank=True, null=True)
    year = models.CharField(max_length=120, blank=True, null=True)
    actual_Dept = models.CharField(max_length=120, blank=True, null=True)
    Amount_taken_prank = models.CharField(max_length=120, blank=True, default=0)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    caution = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    generated_id = models.CharField(max_length=120, blank=True, null=True)
    route = models.CharField(max_length=120, blank=True, null=True)
    Password = models.CharField(max_length=120, blank=True, null=True)
    estmated_Dept = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    condition = models.CharField(max_length=120, blank=True, default='start')
    privs = models.CharField(max_length=120, blank=True, default='Client')
    def save(self, *args, **kwargs):
        if self.last_date is None or self.last_date == "":
            if self.mwezi1:
                self.last_date = timezone.now() + timedelta(days=30)
                if self.generated_id is None or self.generated_id == "":
                    self.generated_id = account_generator()
            elif self.miezi2:
                self.last_date = timezone.now() + timedelta(days=60)
                if self.generated_id is None or self.generated_id == "":
                    self.generated_id = account_generator()
            elif self.miezi3:
                self.last_date =  timezone.now() + timedelta(days=90)
                if self.generated_id is None or self.generated_id == "":
                    self.generated_id = account_generator()
       
           
        super(wapangaji, self).save(*args, **kwargs)


class VyumbaModel(models.Model):
    date = models.CharField(max_length=120, blank=True, null=True)
    last_date = models.CharField(max_length=120, blank=True, null=True)
    name = models.CharField(max_length=120, blank=True, null=True)
    full_name = models.CharField(max_length=120, blank=True, null=True)
    nyumbaname = models.CharField(max_length=120, blank=True, null=True)
    simu = models.CharField(max_length=120, blank=True, null=True)
    # Account_number = models.CharField(max_length=120, blank=True, null=True)
    nyumba_number = models.CharField(max_length=120, blank=True, null=True)
    Bei = models.CharField(max_length=120, blank=True, null=True)
    sifa = models.CharField(max_length=120, blank=True, null=True)
    Chumba_No = models.CharField(max_length=120, blank=True, null=True)
    ukubwa = models.CharField(max_length=120, blank=True, null=True)
    nyumba_number = models.CharField(max_length=120, blank=True, null=True)
    shughuri = models.CharField(max_length=120, choices = shughurii, blank=True, null=True)
    ulipoajiriwa = models.CharField(max_length=120, blank=True, null=True)
    idara = models.CharField(max_length=120, blank=True, null=True)
    daily = models.CharField(max_length=120, blank=True, null=True)
    anwani = models.CharField(max_length=120, blank=True, null=True)
    wilaya_kikazi = models.CharField(max_length=120, blank=True, null=True)
    aina_ya_chumba = models.CharField(max_length=120, blank=True, choices = aina_chumba, null=True)
    kulipia = models.CharField(max_length=120, blank=True, null=True)
    kiasi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    eneo = models.CharField(max_length=120, blank=True, null=True)
    malipo = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    nyumbaid = models.CharField(max_length=120, blank=True, null=True)
    file_no = models.CharField(max_length=120, blank=True, null=True)
    muda = models.CharField(max_length=120, blank=True, null=True)
    # wapangaji_max = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    jina_mdhamini = models.CharField(max_length=120, blank=True, null=True)
    House_Owner = models.CharField(max_length=120, blank=True, null=True)
    cheo = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, null=True)
    simu_dalali = models.CharField(max_length=120, blank=True, null=True)
    baki = models.CharField(max_length=120, blank=True, null=True)
    mwezi1 = models.CharField(max_length=120, blank=True, null=True)
    miezi2 = models.CharField(max_length=120, blank=True, null=True)
    miezi3 = models.CharField(max_length=120, blank=True, null=True)
    year = models.CharField(max_length=120, blank=True, null=True)
    actual_Dept = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    caution = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    route = models.CharField(max_length=120, blank=True, null=True)
    Password = models.CharField(max_length=120, blank=True, null=True)
    estmated_Dept = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    condition = models.CharField(max_length=120, blank=True, default='start')
    privs = models.CharField(max_length=120, blank=True, default='Client')
    photo = models.FileField(null=True, blank=True)
    photo2 = models.FileField(null=True, blank=True)
    photo3 = models.FileField(null=True, blank=True)
    photo4 = models.FileField(null=True, blank=True)
    photo5 = models.FileField(null=True, blank=True)
    photo6 = models.FileField(null=True, blank=True)
    # photo7 = models.FileField()
    # photo8 = models.FileField()
    # photo9 = models.FileField()

  

    # def save(self, *args, **kwargs):
    #     if self.last_date is None or self.last_date == "":
    #         if self.mwezi1:
    #             self.date =timezone.now()
            
    #             self.last_date = timezone.now() + timedelta(days=30)
    #         elif self.miezi2:
    #             self.date =timezone.now()
    #             self.last_date = timezone.now() + timedelta(days=60)
    #         elif self.miezi3:
    #             self.date =timezone.now()
    #             self.last_date =  timezone.now() + timedelta(days=90)
    #     if self.date is None or self.date=="":
    #         self.date = timezone.now()
    #     super(wapangaji, self).save(*args, **kwargs)



class wapangajiDeleted(models.Model):
    date = models.DateTimeField(auto_now_add=True, auto_now=False)
    last_date = models.CharField(max_length=120, blank=True, null=True)
    name = models.CharField(max_length=120, blank=True, null=True)
    simu = models.CharField(max_length=120, blank=True, null=True)
    # Account_number = models.CharField(max_length=120, blank=True, null=True)
    nyumba_number = models.CharField(max_length=120, blank=True, null=True)
    shughuri = models.CharField(max_length=120, choices = shughurii, blank=True, null=True)
    ulipoajiriwa = models.CharField(max_length=120, blank=True, null=True)
    idara = models.CharField(max_length=120, blank=True, null=True)
    daily = models.CharField(max_length=120, blank=True, null=True)
    anwani = models.CharField(max_length=120, blank=True, null=True)
    wilaya_kikazi = models.CharField(max_length=120, blank=True, null=True)
    aina_ya_chumba = models.CharField(max_length=120, blank=True, choices = aina_chumba, null=True)
    kulipia = models.CharField(max_length=120, blank=True, null=True)
    kiasi = models.CharField(max_length=120, blank=True, null=True)
    kata = models.CharField(max_length=120, blank=True, null=True)
    eneo = models.CharField(max_length=120, blank=True, null=True)
    malipo = models.CharField(max_length=120, blank=True, null=True)
    nyumbaid = models.CharField(max_length=120, blank=True, null=True)
    muda = models.CharField(max_length=120, blank=True, null=True)
    House_Owner = models.CharField(max_length=120, blank=True, null=True)
    # wapangaji_max = models.CharField(max_length=120, blank=True, null=True)
    wilaya = models.CharField(max_length=120, blank=True, null=True)
    mkoa = models.CharField(max_length=120, blank=True, null=True)
    jina_mdhamini = models.CharField(max_length=120, blank=True, null=True)
    service_officer = models.CharField(max_length=120, blank=True, null=True)
    cheo = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, null=True)
    simu_dalali = models.CharField(max_length=120, blank=True, null=True)
    baki = models.CharField(max_length=120, blank=True, null=True)
    mwezi1 = models.CharField(max_length=120, blank=True, null=True)
    miezi2 = models.CharField(max_length=120, blank=True, null=True)
    miezi3 = models.CharField(max_length=120, blank=True, null=True)
    year = models.CharField(max_length=120, blank=True, null=True)
    actual_Dept = models.CharField(max_length=120, blank=True, null=True)
    estmated_Dept = models.CharField(max_length=120, blank=True, null=True)
    info = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    mwezi = models.CharField(max_length=120, blank=True, null=True)

  











class Mkataba(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    mkataba = models.FileField()


class LoanAgreementTemplate(models.Model):
    company_username = models.CharField(max_length=120)
    title = models.CharField(max_length=200)
    pdf_file = models.FileField(upload_to='loan-agreement-templates/%Y/%m/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['title', '-uploaded_at']

    def __str__(self):
        return f'{self.title} ({self.company_username})'




class kitambulisho(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    kitambulisho = models.FileField()

class Application_form(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    application_form = models.FileField()

class Slipe(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pin = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=120, blank=True, null=True)
    slip = models.FileField()


class HouseModel(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    house = models.FileField()


class RentPrices(models.Model):
    date = models.CharField(max_length=120, blank=True, null=True)
    end_date = models.CharField(max_length=120, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    house = models.CharField(max_length=120, blank=True, null=True)
    Rent_budget = models.CharField(max_length=120, blank=True, default=0)
    Total_paid = models.CharField(max_length=120, blank=True, null=True)
    status = models.CharField(max_length=120, blank=True, null=True)
    Time_interval = models.CharField(max_length=120, blank=True, null=True)
    Daily = models.CharField(max_length=120, blank=True, default=0)
    mwezi = models.CharField(max_length=120, blank=True, null=True)
    mwaka = models.CharField(max_length=120, blank=True, null=True)
    Deni = models.CharField(max_length=120, blank=True, default=0)



class AuthenticationModel(models.Model):
    generated_key = models.CharField(max_length=2000, blank=True, null=True)
    user = models.CharField(max_length=120, blank=True, null=True)
    Time_logedin = models.DateTimeField(auto_now_add=True, auto_now=False, blank=True, null=True)
    Time_logedout = models.CharField(max_length=120, blank=True, null=True)
    company = models.CharField(max_length=120, blank=True, null=True)
    Time_range = models.CharField(max_length=120, blank=True, null=True)
    Status = models.CharField(max_length=120, blank=True, null=True, choices=options)
    Token_key= models.CharField(max_length=2000, blank=True, null=True)




class loginModel(models.Model):
    username =models.CharField(max_length=2000, blank=True, null=True)
    email =models.EmailField(null=True)
    password =models.CharField(max_length=2000, blank=True, null=True)
    token =models.CharField(max_length=2000, blank=True, null=True)


# ---------- SMS ----------
# Every SMS the system sends, and every reply a customer sends back.
# The chat page and the bulk reminders read from here.
class SmsMessage(models.Model):
    DIRECTIONS = (('out', 'Sent by us'), ('in', 'Reply from the customer'))

    company = models.CharField(max_length=120, blank=True, null=True)
    customer = models.IntegerField(blank=True, null=True)      # Register pk, when we know the customer
    name = models.CharField(max_length=120, blank=True, null=True)
    phone = models.CharField(max_length=30, db_index=True)    # always +255..., so one person = one chat
    body = models.TextField()
    direction = models.CharField(max_length=3, choices=DIRECTIONS, default='out')
    # queued, sent, delivered, failed, test (not really sent), received
    status = models.CharField(max_length=20, default='queued')
    provider = models.CharField(max_length=20, blank=True, default='')
    provider_id = models.CharField(max_length=120, blank=True, default='', db_index=True)
    error = models.CharField(max_length=500, blank=True, default='')
    sent_by = models.CharField(max_length=120, blank=True, default='')
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created', 'id']

    def __str__(self):
        return self.direction + ' ' + self.phone + ': ' + self.body[:30]
