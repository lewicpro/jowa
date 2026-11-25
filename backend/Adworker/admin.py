# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import *
from django.contrib import admin

# Register your models here.

# admin.site.site_heade = ''

class MyModelAdmin(admin.ModelAdmin):
    class Media:
        js = ('js/admin/my_own_admin.js',)    
        css = {
                'all': ('static/css/admin/my_own_admin.css',)
        }


class numberGenAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
    # 'user',
        'numbers',
        'country_code',
        
    ]
class OrderTrucksAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'user',
        'from_location',
        'to_location',
        'pickup_location',
        'dropoff_location',
        'plate_number',
        'package_size',
        'current_mileage',
        'year_of_manufacture',
        'package_description',
        'company_name_sender',
        'sender_name',
        'sender_email',
        'sender_mobile_number',
        'company_name_receiver',
        'receiver_name',
        'total_payment',
        'transaction_id_total_payment',
        'initial_payment',
        'transaction_id_final_payment',
        'payment_mode',
        
    ]

class DukaProductsAddedAdmin(admin.ModelAdmin):
    list_display =['Tarehe', 'Last_Stock_Date', 'user', 'Name_of_the_product', 'Price_bought', 'Selling_price', 'Last_Confirmed_Number_of_products', 'Number_of_products', 'Officer_worker', 'Profit', 'Wakala_name', 'Directors_name', 'Total_Purchased', 'Total_Available_product_wise', 'Total_Available', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Matumizi', 'Wholesale_price', 'Wholesale_profit', 'Shelf_No', 'carton', 'company', 'Description', 'Product_number', 'Product_serial', 'Type_of_product', 'Number_of_products_sold', 'status',]
class TruckRequestsModalAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'Date',
        'username',
        'Full_name',
        'company_name',
        'Company_Email',
        'company_Registration',
        'phone',
        'Description',
        'Type_of_request',
        'Serial_no',
        'Trailer',
        'Amount',
        'Status',
        'Comment',
        'Prepared_by',
      
        
    ]

class TrucksModalAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'date',
        'username',
        'trailer',
        'horse',
        'mileage',
        'fuel',
        'make',
        'gvm',
        'manufacture',
        'carclass',
        'tons',
        'fuels',
        'color',
        'disposaldate',
        'username',
        'director',
        'owner',
        'owner_mobile',
        
    ]
class PaymentApplicationAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'Company',
        'Company_District',
        'Company_Email',
        'Company_Name',
        'Company_Phone',
        'Password',
        'Password2',
        'officer',
        'officerPhone',
        'officeremail',
        'officerfullname',
        'package',
        'payment_method',
        'region',
        'status',
        'startdate',
        'enddate',
        'browser',
        'device',
        'country',
        'Transaction_Id',
        
    ]
class DukaWamilikiAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'tarehe',
        'jina',
        'Account_no',
        'name_of_the_bank',
        'kipindi',
        'kata',
        'Registration_no',
        'wilaya',
        'service_officer',
        'Tin_no',
        'mkoa',
        'Jinsia',
        'Simu',
        'receipt_no',
        'company',
        'Email',
        
    ]
class DukaAdmin(admin.ModelAdmin):
    list_display =[
        'tarehe',
        'user',
        'jina',
        'Account_no',
        'name_of_the_bank',
        'kipindi',
        'kata',
        'Registration_no',
        'wilaya',
        'service_officer',
        'Tin_no',
        'mkoa',
        'Jinsia',
        'Simu',
        'receipt_no',
        'company',
        'Email',
        
    ]

class DukaDailyReportAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'Tarehe',
        'user',
        'Amount',
        'Description',
        
    ]
class DukaCustomersAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'tarehe',
        'user',
        'jina',
        'descriptions',
        'Email',
        'physicaladdress',
        'tin_number',
        'company',
        'location',
        'phone',
        
    ]

class DukaCustomersFilesAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'tarehe',
        'customer_name',
        'company',
        'filegiven',
        
    ]


class DukaProductsCategoriesAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'Tarehe',
        'title',
        'user',
        'image',
        
    ]

class JobsAdmin(admin.ModelAdmin):
    list_display =[
        'pk', 'applicant_name', 'birthdate', 'location', 'phone', 'email', 'myaddress', 'reffered', 'applied_for',  'skills', 
        
    ]

class DukaMadeniAdmin(admin.ModelAdmin):
    list_display =[
        'pk',

        'user',
        'Jina_Mteja',
        'Amount',
        'Description',
        'Tarehe',
        'Tarehe_upd',
        'Product_seller',
        'Name_of_the_product',
        'Price_bought', 
        'Selling_price', 

        'Number_of_products', 
        'Profit', 
        'Officer_worker', 
        'Wakala_name', 
        'Total_Purchased', 
        'Directors_name', 
        'Type_of_product', 
        'barcode', 
        'Number', 
        'Customer_name', 
        'Customer_phone', 
        'Total', 
        'Matumizi', 
        'company', 
        'status', 
        'receipt', 
        # 'quantity', 
        'quantity_remained', 
        'Product_serial', 

        
    ]

class DukaMatumiziAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'Tarehe',
        'user',
        'Amount',
        'Description',
        'company',
        
    ]
class WakalaWorkerSettingsAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'username',
        'Ringtone',
        'Tarehe',
        
    ]

class RentPricesAdmin(admin.ModelAdmin):
    list_display =[
        'date',
        'end_date',
        'user',
        'house',
        'Rent_budget',
        'Total_paid',
        'status',
        'Time_interval',
        'Daily',
        'mwezi',
        'Deni',
        'mwaka',
         
        
    ]
class DukaProductsAdmin(admin.ModelAdmin):
    list_editable=[
        'Product_serial',
    ]
    list_display =[
        'Tarehe',
        'Last_Stock_Date',
        'Name_of_the_product',
        'user',
        'Wakala_name',
        'Selling_price',
        'Product_serial',
        'Last_Confirmed_Number_of_products',
        'Number_of_products',
        'Officer_worker',
        'Total_Purchased',
        'Profit',
        'barcode',
        'carton',
        'Type_of_product',
        'Product_number',
        'Total_brought_product_wise',
        'Total_Available_product_wise',
        'Total_Available',
        'Total_profit',
        'Shelf_No',
        'company',
        'Description',
    ]

class DukaCartAdmin(admin.ModelAdmin):
        list_display =[
        'Tarehe',
        'Last_Stock_Date',
        'Name_of_the_product',
        'user',
        'Wakala_name',
        'Selling_price',
        'Product_serial',
        'Last_Confirmed_Number_of_products',
        'Number_of_products',
        'Officer_worker',
        'Total_Purchased',
        'Profit',
        'barcode',
        'carton',
        'Type_of_product',
        'Product_number',
        'Total_brought_product_wise',
        'Total_Available_product_wise',
        'Total_Available',
        'Total_profit',
        'Shelf_No',
        'company',
        'Description',
        
    ]

class DukaProductsMovementsAdmin(admin.ModelAdmin):
    list_editable=[
        'Product_serial',
    ]
    list_display =[
        'Tarehe',
        'Last_Stock_Date',
        'Name_of_the_product',
        'user',
        'Wakala_name',
        'Selling_price',
        'Product_serial',
        'Last_Confirmed_Number_of_products',
        'Number_of_products',
        'Officer_worker',
        'Total_Purchased',
        'Profit',
        'barcode',
        'carton',
        'Type_of_product',
        'Product_number',
        'Total_brought_product_wise',
        'Total_Available_product_wise',
        'Total_Available',
        'Total_profit',
        'Shelf_No',
        'company',
        'Description',
        # 'Time_interval',
        # 'Daily',
        # 'mwezi',
        # 'Deni',
        # 'mwaka',
         
        
    ]
    


class DukaProductsOrderAdmin(admin.ModelAdmin):
    list_editable=[
        'Product',
    ]
    list_display =[
        'Tarehe',
        'Product',
        'Quantity',
        'user',
        'Typeproduct',
        'Amount',
        'Total',
        'Description',
        'company',
        'officer',
    
        
    ]
class OrdersWorkerAdmin(admin.ModelAdmin):
    list_display =[
         # 'date',
        'user',
        'jina_kamili',
        'Phone',
        'Manager',
        'kata',
        'wilaya',
        'mkoa',
        'Jinsia',
        'Account_No',
        'Bank_name',
        'Birthdate',
        'email',
        'level',
        'Director',
        'service_officer_phone',
        # 'mwaka',
         
        
    ]

class OrdersClientsListsAdmin(admin.ModelAdmin):
    list_display =[
         # 'date',
        'user',
        'jina_kamili',
        'Phone',
        'Manager',
        'kata',
        'wilaya',
        'mkoa',
        'Jinsia',
        'Account_No',
        'Bank_name',
        'Birthdate',
        'email',
        'Director',
        'service_officer_phone',
        # 'mwaka',
         
        
    ]
class OrdersCommissionAdmin(admin.ModelAdmin):
    list_display =[
         # 'date',
        'user',
        'jina_kamili',
        'Phone',
        'Manager',
        'kata',
        'wilaya',
        'mkoa',
        'success',
        'Officer',
        'Account_No',
        'Bank_name',
        'Birthdate',
        'Total_Amount',
        'Director',
        'service_officer_phone',
        # 'mwaka',
         
        
    ]

class OrdersCustomersListsAdmin(admin.ModelAdmin):
    list_display =[
         # 'date',
        'date',
        'user',
        'jina_kamili',
        'Phone',
        'Manager',
        'kata',
        'wilaya',
        'mkoa',
        'Jinsia',
        'Account_No',
        'Bank_name',
        'Birthdate',
        'email',
        'Director',
        'service_officer',
        'service_officer_phone',
        'Longitude',
        'Latitude',
        # 'mwaka',
         
        
    ]
class OrdersDirectorAdmin(admin.ModelAdmin):
    list_display =[
        # 'date',
        'user',
        'jina_kamili',
        'Phone',
        'Manager',
        'kata',
        'wilaya',
        'mkoa',
        'Jinsia',
        'Account_No',
        'Bank_name',
        'Birthdate',
        'email',
        'Director',
        'service_officer_phone',
        # 'mwaka',
         
        
    ]

class Truck_ownersAdmin(admin.ModelAdmin):
    list_display =[
        # 'date',
        'Date',
        'username',
        'Full_name',
        'company_name',
        'Company_Email',
        'company_Registration',
        'phone',
        'gender',
       
      
        # 'mwaka',
         
        
    ]
class OrdersManagerAdmin(admin.ModelAdmin):
    list_display =[
        # 'date',
        'user',
        'jina_kamili',
        'Phone',
        'Manager',
        'kata',
        'wilaya',
        'mkoa',
        'Jinsia',
        'Account_No',
        'Bank_name',
        'Birthdate',
        'email',
        'Director',
        'service_officer_phone',
        # 'mwaka',
         
        
    ]

class InputMtandaoAdmin(admin.ModelAdmin):
    list_display =[
        'username',
        'Wakala_name',
        'Director_name',
        'DTB',
        'CRDB',
        'Nbc',
        'NMB',
        'Access_Bank',
        'Mpesa',
        'Mpesa_Float',
        'Halopesa',
        'Tigopesa',
        'Selcom',
        'TPB',
        # 'Access_Bank',
        # 'Daily',
        # 'mwezi',
        # 'Deni',
        # 'mwaka',
         
        
    ]
class DukaProductsSalesAdmin(admin.ModelAdmin):
    list_editable = (
        'Tarehe',
        )

    list_display =[
        'pk',
        'Tarehe',
        'Name_of_the_product',
        'user',
        'Selling_price',
        'Number_of_products',
        'Officer_worker',
        'barcode',
        'Total_Purchased',
        'Number',
        'Type_of_product',
        'status',
        'receipt',
        'company',
        'quantity',
        'Customer_name',
        'Customer_phone',
        'Total',
        # 'mwaka',
         
        
    ]
    
        
    

class DukaProductsStockAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'Last_Stock_Date',
        'Name_of_the_product',
        'user',
        'Selling_price',
        'Number_of_products',
        'Officer_worker',
        'barcode',
        'Total_Purchased',
        'Number',
        'status',
        # 'mwezi',
        # 'Deni',
        # 'mwaka',
         
        
    ]
    

class WorkerKilichobakiAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        # 'Mpesa',
        'Tigopesa',
        'TPB',
        'NBC',
        'NMB',
        'SELCOM',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
        'Output_Status',
        'Status',
        'body',
        'Process',
         
        
    ]

class ValueChangeKilichotumikaAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        # 'Mpesa',
        'Tigopesa',
        'TPB',
        'NBC',
        'NMB',
        'SELCOM',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
        'Output_Status',
        'Status',
        'body',
        'Process',
         
        
    ]

class authdataModelAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'datavalue',
       
        
    ]
class privilegeAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'name',
        'privs',
       
        
    ]
class JumlaAdmin(admin.ModelAdmin):
    list_display =[
        'Total_balance',
        'Rejesho_mwezi',
        'Mkopo',
       
        
    ]
class JumlaMicrofinanceAdmin(admin.ModelAdmin):
    list_display =[
        'company',
        'Total_balance',
        'Rejesho_mwezi',
        'Mkopo',
        'Faida',
       
        
    ]
class JumlaNyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'Total_balance',
        'Rejesho_mwezi',
        'Mkopo',
       
        
    ]
class IdcardAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'idcard',
       
        
    ]
    
class BankStatementAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'bankstatement',
       
        
    ]
    
class SlipAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'slip',
       
        
    ]

class AtmAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'Atm',
       
        
    ]

class OwnerKitambulishoAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'Kitambulisho',
       
        
    ]
    
class OwnerSlipAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'Slip',
    ]
    
class OwnerApplicationAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'slip',
    ]
    

class OwnerMkatabaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'Mkataba',
       
        
    ]
class ProfileAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'photo',
       
        
    ]
class ProfileNyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'photo',
       
        
    ]
class UserInfoAdmin(admin.ModelAdmin):
    search_fields = (
            'user',
            )

    list_display =[
        'user',
        'Riba',
        'Balance',
        'mwezi',
        'mkopo',
        'Faida',
        'Rejesho_mwezi',
        'Balance_Cash',
    ]

class DukaSourceAdmin(admin.ModelAdmin):
    search_fields = (
            'user',
            )

    list_display =[
       'Tarehe',
        'user',
        'Amount',
        'company',

        'Description',
    ]

class WorkersTransactionsAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'Jina_Mteja',
        'Amount',
        'Mtandao_au_Benki',
        'Salio',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
        'Process',
        'body',
       
        
    ]

class WakalaWorkerMtandaoAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'user',
        'Mtandao',
        # 'Mtandao_au_Benki',
        # 'Salio',
        # 'Officer_worker',
        # 'Wakala_name',
        # 'Directors_name',
        # 'Process',
        # 'body',
       
        
    ]

class SendRequestHandlersAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'Jina_Mteja',
        'Amount',
        'Mtandao_au_Benki',
        'Salio',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
        'Process',
        'Descriptions',
       
        
    ]
    readonly_fields=[
        'Process',
        'Descriptions',
    ]
    search_fields = (
            'Jina_Mteja',
            )
class JumlaWakalaAdmin(admin.ModelAdmin):
    list_display =[
        'username',
        'Balance',
        'Growthrate',
        'Amount',
        'Kinachotoka',
        'Kilichoingia',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
       
        
    ]
class JumlaWakalaWorkerAdmin(admin.ModelAdmin):
    list_display =[
        'username',
        'Balance',
        'Growthrate',
        'Amount',
        'Kinachotoka',
        'Kilichoingia',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
       
        
    ]
class JumlaWakalaDirectorAdmin(admin.ModelAdmin):
    list_display =[
        'username',
        'Balance',
        'Growthrate',
        'Amount',
        'Kinachotoka',
        'Kilichoingia',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
       
        
    ]

class MatumiziAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'user',
        'Amount',
        'Transaction_id',
        'Amount',
        'Salio',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
        'Process',
       
        
    ]

class OverallWorkerStatusAdmin(admin.ModelAdmin):
    list_display =[
        'worker',
        'jina',
        'tarehe',
        'wakala',
        'Total_pay',
        'Name_of_T_model',
        'Weekly',
        'Monthly',
        'Yealy',
        'Overall',
        'info',
        'Mmiliki_wakala',
        'Registration_no',
        'Jumla_kinachotoka',
        'Jumla_Kinachoingia',
        'Jumla_Faida',
        'Branch_manager',
        'Branch_position',
        'Capital_roundly',
        'company',
        'Status',
        'receipt_no',
        'Location',
        'Registered',
        'Email',
        'Phone_No',
        'Customer_Served',
        'Profit',
        'Static_capital',
        'Growth_rate',
        
    ]

class DirectorTransactionsOverallAdmin(admin.ModelAdmin):
    list_display =[
        'Director',
        'jina',
        'tarehe',
        # 'wakala',
        'Total_pay',
        'Name_of_T_model',
        'Weekly',
        'Monthly',
        'Yealy',
        'Overall',
        'info',
        'Mmiliki_wakala',
        'Registration_no',
        'Jumla_kinachotoka',
        'Jumla_Kinachoingia',
        'Jumla_Faida',
        'Branch_manager',
        'Branch_position',
        'Capital_roundly',
        'company',
        'Status',
        'receipt_no',
        'Location',
        'Registered',
        'Email',
        'Phone_No',
        'Customer_Served',
        'Profit',
        'Static_capital',
        'Growth_rate',
        
    ]

class WorkerTransactionsOverallAdmin(admin.ModelAdmin):
    list_display =[
        'worker',
        'jina',
        'tarehe',
        # 'wakala',
        'Total_pay',
        'Name_of_T_model',
        'Weekly',
        'Monthly',
        'Yealy',
        'Overall',
        'info',
        'Mmiliki_wakala',
        'Registration_no',
        'Jumla_kinachotoka',
        'Jumla_Kinachoingia',
        'Jumla_Faida',
        'Branch_manager',
        'Branch_position',
        'Capital_roundly',
        'company',
        'Status',
        'receipt_no',
        'Location',
        'Registered',
        'Email',
        'Phone_No',
        'Customer_Served',
        'Profit',
        'Static_capital',
        'Growth_rate',
        
    ]
class UserInfoNyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jumla_malipo',
        'Jumla_priceDays',
        'Madai',
        'mkopo',
        'Faida',
        'Rejesho_mwezi',
       
        
    ]

class UserInfoNyumbaAllAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jumla_malipo',
        'Jumla_priceDays',
        'Madai',
        'mkopo',
        'Faida',
      
        'Rejesho_mwezi',
       
        
    ]

class UserInfoNyumbaAllThemAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jumla_malipo',
        'Jumla_priceDays',
        'Madai',
        'mkopo',
        'Faida',
        'Balance',
        'Rejesho_mwezi',
       
        
    ]

class EmailAdmin(admin.ModelAdmin):
    list_display =[
        'Service',
        'Email_from',
        'Subject',
        'body',
        'Email_password',
        'Email_to_file',
        'Email_to',

       
        
    ]

class NyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'name',
        'simu',
        'Account_number',
        'nyumba_number',
        'wapangaji_current',
        'wapangaji_max',
        'service_officer',
        'eneo',
        'kata',
        'wilaya',
        'mkoa',
        'House_Owner',
        # 'file_no',

       
        
    ]

class MicrocreditCompanyAdmin(admin.ModelAdmin):
    list_display =[
        'company_username',
        'company_name',
        'Simu',
        'Tin_Namba',
        'Account_no',
        'Date_registered',
        'Eneo_la_kazi',
        'ofisi',
        'service_officer',
        'company_owner',
        'kata',
        'wilaya',
        'mkoa',
        'file_no',
        'Thamani_ya_kampuni',
        'generated_id',
        'privs',
        # 'file_no',

       
        
    ]

class MarekebishoNyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'nyumba',
        'simu',
        'Account_number',
        'nyumba_number',
        'wapangaji_current',
        'wapangaji_max',
        'mfanyaji_kazi',
        'mkaguzi_wa_kazi',
        'Eneo_la_kazi',
        'info',
        'kiasi_kilichotumika',
        'eneo',
        'kata',
        'wilaya',
        'mkoa',
        
    ]
class MieziNyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]

class NyumbaInfoAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'nyumba',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class MieziToaNyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class MieziAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class MieziToaNyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class MieziAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class MieziToaMicrofinanceAdmin(admin.ModelAdmin):
    list_display =[
        'company',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class MieziMicrofinanceAdmin(admin.ModelAdmin):
    list_display =[
        'company',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class MieziToaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class PersonaloaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'mwaka',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December', 
    ]
class HouseOwnerMieziAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'mwaka',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]
class PersonalWekaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'mwaka',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
       
        
    ]

class MarekebishoNyumbaDeletedAdmin(admin.ModelAdmin):
    list_display =[
        'nyumba',
        'simu',
        'Account_number',
        'nyumba_number',
        'wapangaji_current',
        'wapangaji_max',
        'mfanyaji_kazi',
        'mkaguzi_wa_kazi',
        'service_officer',
        'Eneo_la_kazi',
        'info',
        'kiasi_kilichotumika',
        'eneo',
        'kata',
        'wilaya',
        'mkoa',
        
    ]

class WapangajiAdmin(admin.ModelAdmin):
    search_fields = (
            'name',
            )
    list_display =[
        'date',
        'name',
        'full_name',
        'simu',
        # 'Account_number',
        'nyumba_number',
        'shughuri',
        'ulipoajiriwa',
        'idara',
        'payment_option',
        'matumizi',
        'anwani',
        'aina_ya_chumba',
        'kulipia',
        'service_officer',
        'file_no',
        'wilaya_kikazi',
        'kiasi',
        'kata',
        'eneo',
        'muda',
        'malipo',
        'generated_id',
        'mwezi1',
        'miezi2',
        'miezi3',
        'year',
        'daily',
        'actual_Dept',
        'estmated_Dept',
        'Password',
        'baki',
        # 'wapangaji_max',
        'wilaya',
        'mkoa',
        'jina_mdhamini',
        'cheo',
        'simu_dalali',
        'info',
        'condition',

       
        
    ]

class VyumbaAdmin(admin.ModelAdmin):
    list_display =[
        'date',
        'name',
        'full_name',
        'simu',
        # 'Account_number',
        'nyumba_number',
        'shughuri',
        'ulipoajiriwa',
        'idara',
        'anwani',
        'aina_ya_chumba',
        'kulipia',
        'service_officer',
        'file_no',
        'wilaya_kikazi',
        'kiasi',
        'kata',
        'eneo',
        'muda',
        'malipo',
        'mwezi1',
        'miezi2',
        'miezi3',
        'year',
        'ukubwa',
        'Bei',
        'sifa',
        'Chumba_No',
        'daily',
        'actual_Dept',
        'estmated_Dept',
        'Password',
        'baki',
        # 'wapangaji_max',
        'wilaya',
        'mkoa',
        'jina_mdhamini',
        'cheo',
        'simu_dalali',
        'info',
        'condition',
        'photo',
        'photo2',
        'photo3',
        'photo4',
        'photo5',
        'photo6',
        # 'photo7',
        # 'photo8',
        # 'photo9',

       
        
    ]
    list_display_links=['date']
    # list_editable=['date']

class WapangajiDeletedAdmin(admin.ModelAdmin):
    list_display =[
        'date',
        'name',
        'simu',
        # 'Account_number',
        'nyumba_number',
        'shughuri',
        'ulipoajiriwa',
        'idara',
        'anwani',
        'aina_ya_chumba',
        'kulipia',
        'wilaya_kikazi',
        'service_officer',
        'kiasi',
        'kata',
        'eneo',
        'muda',
        'malipo',
        'mwezi1',
        'miezi2',
        
        'miezi3',
        'year',
        'daily',
        'actual_Dept',
        'estmated_Dept',
        'baki',
        # 'wapangaji_max',
        'wilaya',
        'mkoa',
        'jina_mdhamini',
        'cheo',
        'simu_dalali',
        'info',

       
        
    ]


class RegisteAdmin(admin.ModelAdmin):
    list_display =[
        'Username',
        'jina',
        'TSD',
        'Account_no',
        'kata',
        'wilaya',
        'mkoa',
        'Simu',
        'pin',
        'csv',
        'expire',
        'Jumla_malipo',
        'company_name',
        'company_username',
        'generated_id',
        'ofisi',
        'file_no',
        'House_Owner',
        'company',
        'Registered',
        'Password',
        # 'Passport',
    ]


class MicrocreditAdmin(admin.ModelAdmin):
    list_display =[
        'company_username',
        'company_name',
        'Simu',
        'Tin_Namba',
        'Account_no',
        'Date_registered',
        'Eneo_la_kazi',
        'ofisi',
        'service_officer',
        'company_owner',
        'kata',
        'wilaya',
        'mkoa',
        'file_no',
        'Thamani_ya_kampuni',
        'generated_id',
        'privs',
        # 'file_no',
    ]
class MalipoAdmin(admin.ModelAdmin):
    search_fields = (
            'user',
            )
    list_editable = (
        'Balance',
        )
    list_display =[
        'user',
        'jina',
        'tarehe',
        'Total_pay',
        'loan_repay',
        'receipt_no',
        'Interest_pay',
        'rangi',
        'Balance',
        'kipindi',
        'service_officer',
        'pin',
        'Simu',
        'Account_no',
        'kilichokopwa',
        'tangu',
        'wilaya',
        'company',
        'mkoa',
        'awamu',
    ]

class WakalaMmilikiAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'jina',
        'tarehe',
        'Total_pay',
        # 'loan_repay',
        'receipt_no',
        # 'Interest_pay',
        'rangi',
        'Balance',
        'kipindi',
        'Tin_no',
        'service_officer',
        'pin',
        'Simu',
        'Account_no',
        'Registration_no',
        'kata',
        'tangu',
        'wilaya',
        'company',
        'mkoa',
        # 'awamu',
    ]
class WakalaWorkersAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'jina',
        'tarehe',
        'Total_pay',
        # 'loan_repay',
        'receipt_no',
        # 'Interest_pay',
        'rangi',
        'Balance',
        'kipindi',
        'Email',
        'privs',
        'service_officer',
        'WorkerAffiliatedFrom',
        'pin',
        'Simu',
        'Account_no',
        'Registration_no',
        'kata',
        'tangu',
        'wilaya',
        'company',
        'mkoa',
        # 'awamu',
    ]

class MatumiziWorkerModelAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jina',
        'Tarehe',
        'Amount',
        # 'loan_repay',
        'Officer_worker',
        # 'Interest_pay',
        'Salio',
        'Directors_name',
        'Process',
        'Matumizi',
        # 'awamu',
    ]

class MadeniWorkerModelAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jina',
        'Tarehe',
        'Amount',
        'Officer_worker',
        'Salio',
        'Directors_name',
        'Process',
    ]
class MadeniwkalaWorkerModelAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jina',
        'Tarehe',
        'Amount',
        'Officer_worker',
        'Salio',
        'Directors_name',
        'Description',
        'status',
    ]

class MadeniWorkerAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jina',
        'Tarehe',
        'Amount',
        # 'loan_repay',
        'Officer_worker',
        # 'Interest_pay',
        'Salio',
        'Directors_name',
        'Process',
        'Deni',
        # 'awamu',
    ]

class WaklaMtajiAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'MpesaWorking_Balance',
        'Mpesa_Float',
        'Tigopesa',
        'TPB',
        'NBC',
        'NMB',
        'SELCOM',
        'Mkononi',
        'Officer_worker',
        'Wakala_name',
        'Directors_name',
        'Total',
        'Mtaji',
        'Commision',
        'body',
        'Process',
    ]

class WakalaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'jina',
        'tarehe',
        'Total_pay',
        # 'loan_repay',
        'receipt_no',
        # 'Interest_pay',
        'rangi',
        'Balance',
        'Registration_no',
        'kipindi',
        'service_officer',
        'pin',
        'Simu',
        'Account_no',
        'kata',
        'privs',
        'tangu',
        'wilaya',
        'company',
        'mkoa',
        # 'awamu',
    ]

class WakalaTransactionsOverallAdmin(admin.ModelAdmin):
    list_display =[
        'wakala',
        'jina',
        'tarehe',
        # 'wakala',
        'Total_pay',
        'Name_of_T_model',
        'Weekly',
        'Monthly',
        'Yealy',
        'Overall',
        'info',
        'Mmiliki_wakala',
        'Registration_no',
        'Jumla_kinachotoka',
        'Jumla_Kinachoingia',
        'Jumla_Faida',
        'Branch_manager',
        'Branch_position',
        'Capital_roundly',
        'company',
        'Status',
        'receipt_no',
        'Location',
        'Registered',
        'Email',
        'Phone_No',
        'Customer_Served',
        'Profit',
        'Static_capital',
        'Growth_rate',
    ]
class MalipoDeletedAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'jina',
        'tarehe',
        'Total_pay',
        'loan_repay',
        'Interest_pay',
        'rangi',
        'Balance',
        'kipindi',
        'pin',
        'service_officer',
        'Simu',
        'Account_no',
        'kilichokopwa',
        'tangu',
        'wilaya',
        'mkoa',
        'awamu',
    ]
class HouseModelAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'house',
      
    ]
class OwnerDepositAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'date',
        'Amount',
        'service_officer',
        'Phone',
        'email',
        'balance',
      
    ]
class MkopoDepositAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'date',
        'Amount',
        'service_officer',
        'Phone',
        'email',
        'balance',
      
    ]
class OwnerWithdrawAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'date',
        'Amount',
        'service_officer',
        'Phone',
        'email',
        'balance',
      
    ]
class MkopoWithdrawAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'date',
        'Amount',
        'service_officer',
        'Phone',
        'Email',
        'balance',
      
    ]
class OrderWithdrawAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'date',
        'Amount',
        'service_officer',
        'Phone',
        'Email',
        'balance',
      
    ]
class MkopoAdmin(admin.ModelAdmin):
    list_filter =(
        'user',
    )
    search_fields =(
        'user',
    )
    list_display =[
        'user',
        'jina',
        'tarehe',
        'RealMkopo',
        'Total_mkopo',
        'Miezi',
        'company',
        'Riba',
        'jumla',
        'service_officer',
        'Faida',
        'mw1',
        'mw2',
        'mw3',
        'mw4',
        'mw5',
        'mw6',
        'mw7',
        'mw8',
        'mw9',
        'mw10',
        'mw11',
        'mw12',
        'mwezi1',
        'mwezi2',
        'mwezi3',
        'mwezi4',
        'mwezi5',
        'mwezi6',
        'mwezi7',
        'mwezi8',
        'mwezi9',
        'mwezi10',
        'mwezi11',
        'mwezi12',
        'mwaka',
    ]

class HouseOwnerDaydmin(admin.ModelAdmin):
    list_display =[
        'mwaka',
        'mwezi',
        'tr1',
        'tr2',
        'tr3',
        'tr4',
        'tr5',
        'tr6',
        'tr7',
        'tr8',
        'tr9',
        'tr10',
        'tr11',
        'tr12',
        'tr13',
        'tr14',
        'tr15',
        'tr16',
        'tr17',
        'tr18',
        'tr19',
        'tr20',
        'tr21',
        'tr22',
        'tr23',
        'tr24',
        'tr25',
        'tr26',
        'tr27',
        'tr28',
        'tr29',
        'tr30',
        'tr31',
    ]

class HouseOwnersInfoAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Jumla_malipo',
        'Madeni',
        'Deposited',
        'Withdrawn',
        'Balance',
        'Rejesho_mwezi',
    ]

class HouseOwnersMiezidmin(admin.ModelAdmin):
    list_display =[
        'user',
        'mwaka',
        'Faida',
        'Returns',
        'mwezi',
        'January',
        'February',
        'March',
        'April',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

class MesejinfoAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'jina',
        'tarehe',
        'RealMkopo',
        'Total_mkopo',
        'Miezi',
        'Riba',
        'jumla',
        'Faida',
        'mw1',
        'mw2',
        'mw3',
        'mw4',
        'mw5',
        'mw6',
        'mw7',
        'mw8',
        'mw9',
        'mw10',
        'mw11',
        'mw12',
        'mwezi1',
        'mwezi2',
        'mwezi3',
        'mwezi4',
        'mwezi5',
        'mwezi6',
        'mwezi7',
        'mwezi8',
        'mwezi9',
        'mwezi10',
        'mwezi11',
        'mwezi12',
        'mwaka',
    ]

class SikuMicrofinanceAdmin(admin.ModelAdmin):
    list_display=[
        'company',
        'mwaka',
        'mwezi',
        'tr1',
        'tr2',
        'tr3',
        'tr4',
        'tr5',
        'tr6',
        'tr7',
        'tr8',
        'tr9',
        'tr10',
        'tr11',
        'tr12',
        'tr13',
        'tr14',
        'tr15',
        'tr16',
        'tr17',
        'tr18',
        'tr19',
        'tr20',
        'tr21',
        'tr22',
        'tr23',
        'tr24',
        'tr25',
        'tr26',
        'tr27',
        'tr28',
        'tr29',
        'tr30',
        'tr31',
        ]

class SikuToaMicrofinanceAdmin(admin.ModelAdmin):
    list_display=[
        'company',
        'mwaka',
        'mwezi',
        'tr1',
        'tr2',
        'tr3',
        'tr4',
        'tr5',
        'tr6',
        'tr7',
        'tr8',
        'tr9',
        'tr10',
        'tr11',
        'tr12',
        'tr13',
        'tr14',
        'tr15',
        'tr16',
        'tr17',
        'tr18',
        'tr19',
        'tr20',
        'tr21',
        'tr22',
        'tr23',
        'tr24',
        'tr25',
        'tr26',
        'tr27',
        'tr28',
        'tr29',
        'tr30',
        'tr31',
        ]

class SikuAdmin(admin.ModelAdmin):
    list_display=[
        'mwaka',
        'mwezi',
        'tr1',
        'tr2',
        'tr3',
        'tr4',
        'tr5',
        'tr6',
        'tr7',
        'tr8',
        'tr9',
        'tr10',
        'tr11',
        'tr12',
        'tr13',
        'tr14',
        'tr15',
        'tr16',
        'tr17',
        'tr18',
        'tr19',
        'tr20',
        'tr21',
        'tr22',
        'tr23',
        'tr24',
        'tr25',
        'tr26',
        'tr27',
        'tr28',
        'tr29',
        'tr30',
        'tr31',
 
            
        ]

class SikuKopeshaMicrofinanceAdmin(admin.ModelAdmin):
    list_display=[
        'company',
        'mwaka',
        'mwezi',
        'tr1',
        'tr2',
        'tr3',
        'tr4',
        'tr5',
        'tr6',
        'tr7',
        'tr8',
        'tr9',
        'tr10',
        'tr11',
        'tr12',
        'tr13',
        'tr14',
        'tr15',
        'tr16',
        'tr17',
        'tr18',
        'tr19',
        'tr20',
        'tr21',
        'tr22',
        'tr23',
        'tr24',
        'tr25',
        'tr26',
        'tr27',
        'tr28',
        'tr29',
        'tr30',
        'tr31',
 
            
        ]
class SikuKopeshaAdmin(admin.ModelAdmin):
    list_display=[
        'mwaka',
        'mwezi',
        'tr1',
        'tr2',
        'tr3',
        'tr4',
        'tr5',
        'tr6',
        'tr7',
        'tr8',
        'tr9',
        'tr10',
        'tr11',
        'tr12',
        'tr13',
        'tr14',
        'tr15',
        'tr16',
        'tr17',
        'tr18',
        'tr19',
        'tr20',
        'tr21',
        'tr22',
        'tr23',
        'tr24',
        'tr25',
        'tr26',
        'tr27',
        'tr28',
        'tr29',
        'tr30',
        'tr31',
 
            
        ]



class kitambulishoAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'kitambulisho',
       
        
    ]

class OrderProductsAdmin(admin.ModelAdmin):
    list_display =[
        'pk',
        'Tarehe',
        'Last_Stock_Date',
        'Last_Confirmed_Number_of_products',
        'Name_of_the_product',
        'user',
        'Selling_price',
        'Number_of_products',
        'Profit',
        'Total_Purchased',
        'Officer_worker',
        'Price_bought',
        'order_type',
        'Location',
        'barcode',
        'Package',
        'Number_in_Package',
       
        
    ]
class Duka2Admin(admin.ModelAdmin):
    list_display =[
        'tarehe',
        'user',
        'jina',
        'Account_no',
        'name_of_the_bank',
        'kipindi',
        'kata',
        'Registration_no',
        'wilaya',
        'service_officer',
        'Tin_no',
        'mkoa',
        'Jinsia',
        'Simu',
        'receipt_no',
        'mydirector',
        'company',
        'Email',
       
        
    ]
class OrdersListsAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'Last_Stock_Date',
        'user',
        'Name_of_the_product',
        'Price_bought',
        'Selling_price',
        'Last_Confirmed_Number_of_products',
        'Number_of_products',
        'Officer_worker',
        'Profit',
        'kata',
        'Mkoa',
        'Wilaya',
        'Directors_name',
        'Total_Purchased',
        'Matumizi',
        'Type',
        'Manager_name',
        'Customer',
       
        
    ]
class OrdersMatumiziAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'user',
        'Amount',
        'Description',
        # 'Price_bought',
        # 'Selling_price',
        # 'Last_Confirmed_Number_of_products',
        # 'Number_of_products',
        # 'Officer_worker',
        # 'Profit',
        # 'kata',
        # 'Mkoa',
        # 'Wilaya',
        # 'Directors_name',
        # 'Total_Purchased',
        # 'Matumizi',
        # 'Type',
        # 'Manager_name',
       
        
    ]

class AuthenticationAdmin(admin.ModelAdmin):
    list_display =[
        'generated_key',
        'user',
        'Time_logedin',
        'Time_logedout',
        'company',
        'Status',
        'Time_range',
        'Token_key',
       
        
    ]

class DukaProductsUnitAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'user',
        'code',
        'name',
        
    ]
class DukaProductsCategoryAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'user',
        'code',
        'name',
        
    ]
class DukaProductsSuppliersAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'user',
        'code',
        'name',
        
    ]
class DukaProductsBalanceAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe',
        'user',
        'code',
        'name',
        
    ]


class SugestionsModelAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Room',
        'date',
        'Sugestion',
        'Phone',
        'House_Owner',
        'photo',
       
        
    ]

class OrderSugestionsModelAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Manager',
        'Director',
        'Phone',
        'Message',
        'date',
        'photo',
       
        
    ]


class MkatabaAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'mkataba',
       
        
    ]
    
class DocumentsAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'documents',
       
        
    ]
    
class SlipAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'slip',
       
        
    ]

class ApplicationsAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'pin',
        'phone',
        'application_form',
       
        
    ]
class WakalaWorkerMtandaoAdmin(admin.ModelAdmin):
    list_display =[
        'user',
        'Tarehe',
        # 'phone',
        'Mtandao',
       
        
    ]
class DukaPaymentsAdmin(admin.ModelAdmin):
    list_display =['Tarehe', 'PayeeName', 'TransactionId', 'PymentProcessor', 'AmountPaid', 'TimeApproved', 'Officer', 'Description', 'Remained', 'status', ]





admin.site.register(numberGenModel, numberGenAdmin)
admin.site.register(SikuMicrofinance, SikuMicrofinanceAdmin)
admin.site.register(SikuToaMicrofinance, SikuToaMicrofinanceAdmin)
# admin.site.register(authdataModel, authdataModelAdmin)
admin.site.register(EmailModel, EmailAdmin)
# admin.site.register(Privilages, privilegeAdmin)
admin.site.register(Register, RegisteAdmin)
admin.site.register(Malipo, MalipoAdmin)
admin.site.register(MalipoDeleted, MalipoDeletedAdmin)
admin.site.register(DukaPaymentsModel, DukaPaymentsAdmin)
admin.site.register(Siku, SikuAdmin)
admin.site.register(SikuKopesha, SikuKopeshaAdmin)
admin.site.register(FormMkopo, MkopoAdmin)
admin.site.register(Jumla, JumlaAdmin)
admin.site.register(JumlaMicrofinance, JumlaMicrofinanceAdmin)
admin.site.register(JumlaNyumba, JumlaNyumbaAdmin)
admin.site.register(UserInfo, UserInfoAdmin)
admin.site.register(UserInfoNyumba, UserInfoNyumbaAdmin)
admin.site.register(UserInfoNyumbaAll, UserInfoNyumbaAllAdmin)
admin.site.register(UserInfoNyumbaAllThem, UserInfoNyumbaAllThemAdmin)
admin.site.register(IdentityCard, IdcardAdmin)
admin.site.register(BankStatement, BankStatementAdmin)
admin.site.register(MatumiziWorkerModel, MatumiziWorkerModelAdmin)
admin.site.register(WorkersTransactions, WorkersTransactionsAdmin)
admin.site.register(WakalaTransactionsOverall, WakalaTransactionsOverallAdmin)
admin.site.register(MessageInfo, MesejinfoAdmin)
admin.site.register(DukaProductsStockModel, DukaProductsStockAdmin)
admin.site.register(InputMtandaoModel, InputMtandaoAdmin)
admin.site.register(Nyumba, NyumbaAdmin)
admin.site.register(NyumbaInfo, NyumbaInfoAdmin)
admin.site.register(MarekebishoNyumba, MarekebishoNyumbaAdmin)
admin.site.register(DukaProductsModel, DukaProductsAdmin)
admin.site.register(MarekebishoDeleted, MarekebishoNyumbaDeletedAdmin)
admin.site.register(wapangaji, WapangajiAdmin)
admin.site.register(wapangajiDeleted, WapangajiDeletedAdmin)
admin.site.register(kitambulisho, kitambulishoAdmin)
admin.site.register(Miezi, MieziAdmin)
admin.site.register(VyumbaModel, VyumbaAdmin)
admin.site.register(PersonalToa, PersonaloaAdmin)
admin.site.register(WorkersRequestsHandlerModels, SendRequestHandlersAdmin)
admin.site.register(PersonalWeka, PersonalWekaAdmin)
admin.site.register(ProfileNyumba, ProfileNyumbaAdmin)
admin.site.register(ValueChangeKilichobakiModels, ValueChangeKilichotumikaAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(MieziNyumba, MieziNyumbaAdmin)
admin.site.register(MieziToa, MieziToaAdmin)
admin.site.register(MieziToaNyumba, MieziToaNyumbaAdmin)
admin.site.register(HouseModel, HouseModelAdmin)
admin.site.register(DukaWamiliki, DukaWamilikiAdmin)
admin.site.register(WakalaWorkers, WakalaWorkersAdmin)
admin.site.register(RentPrices, RentPricesAdmin)
admin.site.register(Application_form, ApplicationsAdmin)
admin.site.register(MieziMicrofinance, MieziMicrofinanceAdmin)
admin.site.register(DukaProductsSalesModel, DukaProductsSalesAdmin)
admin.site.register(WakalaWorkerMtandaoModel, WakalaWorkerMtandaoAdmin)
admin.site.register(PaymentApplicationsModel, PaymentApplicationAdmin)
admin.site.register(OrdersCommissionModel, OrdersCommissionAdmin)
admin.site.register(MieziToaMicrofinance, MieziToaMicrofinanceAdmin)
admin.site.register(JumlaWakalaModel, JumlaWakalaAdmin)
admin.site.register(JumlaWakalaWorkerModels, JumlaWakalaWorkerAdmin)
admin.site.register(JumlaWakalaDirectorModels, JumlaWakalaDirectorAdmin)
admin.site.register(OrdersClientsListsModel, OrdersClientsListsAdmin)
admin.site.register(Wakala, WakalaAdmin)
admin.site.register(HouseOwnerInfo, HouseOwnersInfoAdmin)
admin.site.register(WakalaWorkerSettings, WakalaWorkerSettingsAdmin)
admin.site.register(HouseOwnerMiezi, HouseOwnersMiezidmin)
admin.site.register(DukaProductsOrderModel, DukaProductsOrderAdmin)
admin.site.register(DukaProductsMovementModel, DukaProductsMovementsAdmin)
admin.site.register(OwnerWithdraw, OwnerWithdrawAdmin)
admin.site.register(WorkerKilichobakiModels, WorkerKilichobakiAdmin)
admin.site.register(OrdersCustomersListsModel, OrdersCustomersListsAdmin)
admin.site.register(MadeniWorkerModel, MadeniWorkerAdmin)
admin.site.register(DukaProductsCategories, DukaProductsCategoriesAdmin)
admin.site.register(MicrocreditCompany, MicrocreditAdmin)
admin.site.register(DirectorTransactionsOverall, DirectorTransactionsOverallAdmin)
admin.site.register(DukaDailyReportModels, DukaDailyReportAdmin)
admin.site.register(OrderProductsModel, OrderProductsAdmin)
admin.site.register(DukaMadeniModels, DukaMadeniAdmin)
admin.site.register(DukaMatumiziModels, DukaMatumiziAdmin)
admin.site.register(OrdersListsModel, OrdersListsAdmin)
admin.site.register(DukaProductsAddedModel, DukaProductsAddedAdmin)
admin.site.register(WaklaMtajiModels, WaklaMtajiAdmin)
admin.site.register(OrderMatumiziModels, OrdersMatumiziAdmin)
admin.site.register(MadeniwkalaWorkerModel, MadeniwkalaWorkerModelAdmin)
admin.site.register(WorkerTransactionsOverall, WorkerTransactionsOverallAdmin)
admin.site.register(DukaSourceModel, DukaSourceAdmin)
admin.site.register(OrdersWorkerModel, OrdersWorkerAdmin)
admin.site.register(OrdersManagerModel, OrdersManagerAdmin)
admin.site.register(OrdersDirectorModel, OrdersDirectorAdmin)
admin.site.register(WakalaMmiliki, WakalaMmilikiAdmin)
admin.site.register(DukaModels, Duka2Admin)
admin.site.register(OwnerDeposit, OwnerDepositAdmin)
admin.site.register(MkopoDeposit, MkopoDepositAdmin)
admin.site.register(MkopoWithdraw, MkopoWithdrawAdmin)
admin.site.register(OrderWorkerWithdraw, OrderWithdrawAdmin)
# admin.site.register(DukaProductSettings, DukaProductsSettingsAdmin)
admin.site.register(HouseOwnerDay, HouseOwnerDaydmin)
admin.site.register(DukaCustomersFiles, DukaCustomersFilesAdmin)
admin.site.register(DukaCustomers, DukaCustomersAdmin)
admin.site.register(Mkataba, MkatabaAdmin)
admin.site.register(OrderTrucks, OrderTrucksAdmin)
# admin.site.register(OrderTrucks, OrderTrucksAdmin)
admin.site.register(TruckRequestsModel, TruckRequestsModalAdmin)
admin.site.register(SugestionsModel, SugestionsModelAdmin)
admin.site.register(OrderSugestionsModel, OrderSugestionsModelAdmin)
admin.site.register(Jobs, JobsAdmin)
admin.site.register(AuthenticationModel, AuthenticationAdmin)
admin.site.register(DukaCart, DukaCartAdmin)

admin.site.register(DukaProductsBalance, DukaProductsBalanceAdmin)
admin.site.register(DukaProductsSuppliers, DukaProductsSuppliersAdmin)
admin.site.register(DukaProductsCategory, DukaProductsCategoryAdmin)
admin.site.register(DukaProductsUnit, DukaProductsUnitAdmin)