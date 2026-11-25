import csv
import smtplib
import json
from email.mime.text import MIMEText


class sender():
    def emailsend():
        spamReader = csv.reader(open('datingemailscsv.csv', newline=''), delimiter=',')
        for row in spamReader:
            m = ','
            wap = json.dumps(row[0])+str(m)
            print(wap)
            server = smtplib.SMTP('smtp.gmail.com',587)
            server.starttls()
            server.login("lewicpro@gmail.com","lw191919")
            msg = MIMEText("""body""")
            sender = 'lewicpro@gmail.com"'
            recipients = [wap]
            msg['Subject'] = "Subject example"
            msg['From'] = sender
            msg['To'] = ", ".join(recipients)
            msg['Body'] = 'this is the bulk sms'
            server.sendmail(sender, recipients, msg.as_string())
    emailsend()