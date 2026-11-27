from rest_framework import serializers
from ..models import *
from django.contrib.auth import get_user_model
from rest_framework.serializers import CharField, EmailField, ValidationError, SerializerMethodField
from django.db.models import Q
from django.utils import timezone
from decimal import Decimal
User = get_user_model()





class numbSerializer(serializers.ModelSerializer):
    class Meta:
        model = numberGenModel
        fields=[
            'pk',
            'country_code',
            'country_name',
            'numbers'
        ]

class DukaProductsOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsOrderModel
        fields=[
            'pk',
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

class DukaGeneralDeleteHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaGeneralDeleteHistoryModel
        fields=[
                'pk',
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



class JumlaWakalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = JumlaWakalaModel
        fields=[
            'username',
            'Balance',
            'Growthrate',
            'Kinachotoka',
            'Amount',
            'Kilichoingia',
            'Officer_worker',
            'Wakala_name',
            'Directors_name',
        ]

class PaymentApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentApplicationsModel
        fields=[
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
            'Transaction_Id',
            'country',
            'Madai',
        ]
class JumlaWakalaWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = JumlaWakalaWorkerModels
        fields=[
            'username',
            'Balance',
            'Growthrate',
            'Kinachotoka',
            'Amount',
            'Kilichoingia',
            'Officer_worker',
            'Wakala_name',
            'Directors_name',
        ]
class JumlaWakalaDirectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = JumlaWakalaDirectorModels
        fields=[
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

class MatumiziWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatumiziWorkerModel
        fields=[
            'Tarehe',
            'user',
            'Amount',
            'Jina',
            'Transaction_id',
            'Salio',
            'Officer_worker',
            'Wakala_name',
            'Directors_name',
            'Matumizi',
        ]

        # fields = '__all__'

class DukaWamilikiSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaWamiliki
        fields=[
            'pk',
            'tarehe',
            'user',
            'jina',
            'Account_no',
            'name_of_the_bank',
            'kipindi',
            'kata',
            'Registration_no',
            'bucket',
            'expire',
            'industry',
            'othersource',
            'wilaya',
            'service_officer',
            'Tin_no',
            'mkoa',
            'Jinsia',
            'Simu',
            'receipt_no',
            'company',
            'Email',
            'post_office',
            'status'
            
        ]
class MadeniwkalaWorkerSerializers(serializers.ModelSerializer):
    class Meta:
        model = MadeniwkalaWorkerModel
        fields=[
            'Tarehe',
            'user',
            'Amount',
            'Jina',
            'Transaction_id',
            'Salio',
            'Officer_worker',
            'Wakala_name',
            'Directors_name',
            'Description',
            'status',
           
        ]
        
class DukaSourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaSourceModel
        fields=[
            'Tarehe',
            'user',
            'Amount',
            'company',
            'Description',
       
           
        ]
class WorkersTransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkersTransactions
        fields=[
            'Tarehe',
            'Jina_Mteja',
            'Amount',
            'Mtandao_au_Benki',
            'Transaction_id',
            'Salio',
            'Officer_worker',
            'Wakala_name',
            'Phone',
            'Directors_name',
            'body',
            'Process',
        ]

# class PrivilagesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Privilages
#         fields=[
#             'pk',
#             'user',
#             'name',
#             'privs',
         
#         ]
class RentPricesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentPrices
        fields=[
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
class MicrocreditCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = MicrocreditCompany
        fields=[
            'pk',
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

class JumlaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jumla
        fields=[
            'Total_balance',
            'Rejesho_mwezi',
            'Mkopo',
         
        ]
class JumlaMicrofinanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = JumlaMicrofinance
        fields=[
            'company',
            'Total_balance',
            'Rejesho_mwezi',
            'Mkopo',
            'Faida',
         
        ]

class DukaProductsUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsUnit
        fields=[
            'Tarehe',
            'user',
            'code',
            'name',
         
        ]

class DukaProductsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsCategory
        fields=[
            'pk',
            'user',
            'code',
            'name',
         
        ]

class DukaProductsSuppliersSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsSuppliers
        fields=[
            'pk',
            'user',
            'code',
            'name',
         
        ]
class DukaProductsBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsBalance
        fields=[
            'pk',
            'Tarehe',
            'user',
            'code',
            'name',
         
        ]


class JumlaNyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = JumlaNyumba
        fields=[
            'Total_balance',
            'Rejesho_mwezi',
            'Mkopo',
         
        ]

class NyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nyumba
        fields=[
            'pk',
            'name',
            'simu',
            'Account_number',
            'nyumba_number',
            'wapangaji_current',
            'service_officer',
            'wapangaji_max',
            'nyumbaname',
            'eneo',
            'kata',
            'wilaya',
            'House_Owner',
            # 'file_no',
            'mkoa',
         
        ]

class MarekebishoNyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarekebishoNyumba
        fields=[
            'pk',
            'nyumba',
            'simu',
            'tarehe',

            'Account_number',
            'nyumba',
            'wapangaji_current',
            'wapangaji_max',
            'service_officer',
            'mfanyaji_kazi',
            'info',
            'mkaguzi_wa_kazi',
            'Eneo_la_kazi',
            'kiasi_kilichotumika',
            'eneo',
            'kata',
            'wilaya',
            'mkoa',
         
        ]

class MarekebishoDeletedSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarekebishoDeleted
        fields=[
            'pk',
            'nyumba',
            'simu',
            'tarehe',

            'Account_number',
            'nyumba',
            'wapangaji_current',
            'wapangaji_max',
            'mfanyaji_kazi',
            'info',
            'service_officer',
            'mkaguzi_wa_kazi',
            'Eneo_la_kazi',
            'kiasi_kilichotumika',
            'eneo',
            'kata',
            'wilaya',
            'mkoa',
         
        ]

class WakalaWorkerSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WakalaWorkerSettings
        fields=[
            'pk',
            'username',
            'Tarehe',
            'Ringtone',

            # 'Account_number',
            # 'nyumba',
            # 'wapangaji_current',
            # 'wapangaji_max',
            # 'mfanyaji_kazi',
            # 'info',
            # 'service_officer',
            # 'mkaguzi_wa_kazi',
            # 'Eneo_la_kazi',
            # 'kiasi_kilichotumika',
            # 'eneo',
            # 'kata',
            # 'wilaya',
            # 'mkoa',
         
        ]
class WakalaMmilikiSerializer(serializers.ModelSerializer):
    class Meta:
        model = WakalaMmiliki
        fields=[
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
            'service_officer',
            'Registration_no',
            'pin',
            'Simu',
            'Account_no',
            'Jinsia',
            'age',
            'kata',
            'tangu',
            'wilaya',
            'company',
            'mkoa',
        ]


        

class WakalaWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = WakalaWorkers
        fields=[
            'user',
            'jina',
            'tarehe',
            'Total_pay',
            'receipt_no',
            'rangi',
            'Balance',
            'kipindi',
            'service_officer',
            'pin',
            'Simu',
            'Account_no',
            'Branch_manager',
            'WorkerAffiliatedFrom',
            'Mmiliki_wakala',
            'privs',
            'Jinsia',
            'born',
            'kata',
            'tangu',
            'wilaya',
            'Email',
            'company',
            'mkoa',
        ]
class WakalaTransactionsOverallSerializer(serializers.ModelSerializer):
    class Meta:
        model = WakalaTransactionsOverall
        fields=[
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

class WakalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wakala
        fields=[
            'user',
            'jina',
            'tarehe',
            'Total_pay',
            # 'loan_repay',
            'receipt_no',
            # 'Interest_pay',
            'rangi',
            # 'Balance',
            'kipindi',
            'Birth',
            'Registration_no',
            'service_officer',
            'mmiliki',
            'pin',
            'Simu',
            'privs',
            'Account_no',
            'kata',
            'tangu',
            'Tin_no',
            'wilaya',
            'company',
            'mkoa',
        ]

class DukaWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaWorker1
        fields=[
            'user',
            'jina',
            'tarehe',
            'Kitambulisho',
            # 'loan_repay',
            'Birth_Date',
            # 'Interest_pay',
            'Total_Sold',
            # 'Balance',
            'kipindi',
            # 'Birth',
            'Registration_no',
            'service_officer',
            'mmiliki',
            'pin',
            'Simu',
            'Account_no',
            'kata',
            'tangu',
            'Tin_no',
            'wilaya',
            'company',
            'mkoa',
        ]

class DukaDailyReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaDailyReportModels
        fields=[
            'pk',
            'Tarehe',
            'user',
            'Amount',
            'Description',
        ]
class JobspostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields=[
            'pk',
            'applicant_name',
            'birthdate',
            'location',
            'phone',
            'email',
            'myaddress',
            'skills',
            'applied_for',
            'reffered',
        ]

class DukaMatumiziSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaMatumiziModels
        fields=[
            'pk',
            'Tarehe',
            'user',
            'Amount',
            'Description',
            'company',
        ]

class ChangePasswordSerializer(serializers.Serializer):
    model = User
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

class DukaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaModels
        fields=[
            'pk',
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
            'mydirector',
            'statuse',
            'Director',
            'Email',
            ]

class OrderWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdersWorkerModel
        fields=[
            'user',
            'jina_kamili',
            'Phone',
            'Manager',
            'kata',
            'wilaya',
            'mkoa',
            'Jinsia',
            'Account_No',
            'balance',
            'Comm_Balance',
            'level',
            'Bank_name',
            # 'Passsword',
            'Birthdate',
            'email',
            'service_officer',
            'privilleges',
            'Director',
            'service_officer_phone',
            ]

class OrdersClientsListsSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrdersClientsListsModel
        fields=[
            'date',
            'user',
            'jina_kamili',
            'Phone',
            'Manager',
            'kata',
            'wilaya',
            'mkoa',
            'Jinsia',
            'status',
            'Account_No',
            'Bank_name',
            # 'Passsword',
            'Birthdate',
            'email',
            'service_officer',
            'Director',
            'service_officer_phone',
            ]

class OrdersCommissionSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrdersCommissionModel
        fields=[
            'date',
            'user',
            'jina_kamili',
            'Phone',
            'Manager',
            'kata',
            'wilaya',
            'mkoa',
            'success',
            'Account_No',
            'Bank_name',
            # 'Passsword',
            'Birthdate',
            'Officer',
            'Total_Amount',
            'service_officer',
            'Director',
            'service_officer_phone',
            ]

class OrdersCustomersListsSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrdersCustomersListsModel
        fields=[
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
            'status',
            'email',
            'Director',
            'service_officer',
            'service_officer_phone',
            'Longitude',
            'Latitude',
            # 'mwaka',
            ]

class OrdersListsSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrdersListsModel
        fields=[
            'pk',
            'Tarehe',
            'Last_Stock_Date',
            'jina_kamili',
            'user',
            'Phone',
            'Name_of_the_product',
            'Price_bought',
            'Selling_price',
            'Last_Confirmed_Number_of_products',
            'Number_of_products',
            'Officer_worker',
            'Profit',
            'kata',
            'Mkoa',
            'Location',
            'Wilaya',
            'Directors_name',
            'Total_Purchased',
            'Matumizi',
            'status',
            'Type',
            'Manager_name',
            'Customer',
            ]
class OrderManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdersManagerModel
        fields=[
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
            'Growth_rate',
            'Bank_name',
            'service_officer',
            'Birthdate',
            'email',
            'Director',
            'balance',
            'service_officer_phone',
            'Manager_Position',
            'Cash_Balance',
            'Status',
            'Customer_Served',
        ]
class MadeniWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MadeniWorkerModel
        fields=[
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
class OrderDirectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdersDirectorModel
        fields=[
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
            'Password',
            'service_officer_phone',
        ]


class WapangajiSerializer(serializers.ModelSerializer):
    class Meta:
        model = wapangaji
        fields=[
            'pk',
            'date',
            'full_name',
            'name',
            'simu',
            'payment_option',
            'matumizi',
            'deni',

            # 'Account_number',
            'nyumba_number',
            'shughuri',
            'ulipoajiriwa',
            'Password',
            'idara',
            'anwani',
            'service_officer',
            'aina_ya_chumba',
            'kulipia',
            'file_no',
            'House_Owner',
            'kiasi',
            'nyumbaname',
            'generated_id',
            'kata',
            'eneo',
            'mwezi1',
            'muda',
            'caution',
            'status',
            'baki',
            'malipo',
            'miezi2',
            'miezi3',
            'wilaya_kikazi',
            'year',
            'daily',
            'wilaya',
            'mkoa',
            'route',
            'mwezi',
            'mwaka',
            'jina_mdhamini',
            'nyumbaid',
            'cheo',
            'simu_dalali',
            'last_date',
            'info',
            'condition',
            'privs',
    
        ]
class VyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = VyumbaModel
        fields=[
            'pk',
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
            'sifa',
            'Chumba_No',
            'ukubwa',
            'Bei',
            'sifa',
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


class WapangajiEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = wapangaji
        fields=[
            'pk',
            'date',
            'full_name',
            'name',
            'simu',

            # 'Account_number',
            'nyumba_number',
            'shughuri',
            'ulipoajiriwa',
            'idara',
            'anwani',
            'aina_ya_chumba',
            # 'kulipia',
            # 'kiasi',
            'kata',
            'eneo',
            # 'mwezi1',
            'muda',
            'caution',
            # 'status',
            # 'baki',
            # 'malipo',
            # 'miezi2',
            # 'miezi3',
            'wilaya_kikazi',
            # 'year',
            # 'daily',
            'wilaya',
            'mkoa',
            'route',
            'mwezi',
            'mwaka',
            'jina_mdhamini',
            'nyumbaid',
            'cheo',
            'simu_dalali',
            # 'last_date',
            # 'info',
            # 'condition',
    
        ]



class WapangajiUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = wapangaji
        fields=[
            'pk',
            'date',
            'name',
            'condition',
        ]

class DukaProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsModel
        fields=[
            'pk',
            'Tarehe',
            'user',
            'Last_Stock_Date',
            'Last_Confirmed_Number_of_products',
            'Name_of_the_product',
            'user',
            'Selling_price',
            'Number_of_products',
            'Profit',
            'Total_Purchased',
            'Officer_worker',
            'Product_serial',
            'Description',
            'Price_bought',
            'Shelf_No',
            'carton',
            'photo',
            # 'profile',
            'barcode',
            'company',
            'Type_of_product',
            'amountofproductval',
            'Expiration_date',
            'Wholesale_price',
            'Wholesale_profit',
            'Number_of_products_sold',
            'Total_Available_product_wise',
            'Total_brought_product_wise',
            'Total_profit_product_wise',
        ]

class DukaCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaCart
        fields=[
            'pk',
            'Tarehe',
            'user',
            'Last_Stock_Date',
            'Last_Confirmed_Number_of_products',
            'Name_of_the_product',
            'user',
            'Selling_price',
            'Number_of_products',
            'Profit',
            'Total_Purchased',
            'Officer_worker',
            'Product_serial',
            'Description',
            'Price_bought',
            'Shelf_No',
            'carton',
            'photo',
            # 'profile',
            'barcode',
            'company',
            'Type_of_product',
            'amountofproductval',
            'Expiration_date',
            'Wholesale_price',
            'Wholesale_profit',
            'Number_of_products_sold',
            'Total_Available_product_wise',
            'Total_brought_product_wise',
            'Total_profit_product_wise',
            'cart_status',
        ]
class DukaProductsMovementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsMovementModel
        fields=[
            'pk',
            'Tarehe',
            'user',
            'Last_Stock_Date',
            'Last_Confirmed_Number_of_products',
            'Name_of_the_product',
            'user',
            'Selling_price',
            'Number_of_products',
            'Profit',
            'Total_Purchased',
            'Officer_worker',
            'Product_serial',
            'Description',
            'Price_bought',
            'Shelf_No',
            'Move_from',
            'Move_to',
            'carton',
            'photo',
            # 'profile',
            'barcode',
            'company',
            'Type_of_product',
            'amountofproductval',
            'Expiration_date',
            'Wholesale_price',
            'Wholesale_profit',
            'Number_of_products_sold',
            'Total_Available_product_wise',
            'Total_brought_product_wise',
            'Total_profit_product_wise',
        ]
class DukaPaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaPaymentsModel
        fields=['Tarehe', 'PayeeName', 'TransactionId', 'PymentProcessor', 'AmountPaid', 'TimeApproved', 'Officer', 'Description', 'Remained', 'status', ]

class DukaProductsImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsModel
        fields=[
            'pk',
            'Tarehe',
            'user',
            'Last_Stock_Date',
            'Last_Confirmed_Number_of_products',
            'Name_of_the_product',
            'user',
            'Selling_price',
            'Number_of_products',
            'Profit',
            'Total_Purchased',
            'Officer_worker',
            'Product_serial',
            'Description',
            'Price_bought',
            'Shelf_No',
            'carton',
            'photo',
            # 'profile',
            'barcode',
            'company',
            'Type_of_product',
            'amountofproductval',
            'Expiration_date',
            'Wholesale_price',
            'Wholesale_profit',
            'Number_of_products_sold',
            'Total_Available_product_wise',
            'Total_brought_product_wise',
            'Total_profit_product_wise',
        ]

class TruckSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrucksModal
        fields=[
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
            'cartype',
           
        ]
class TruckOwnersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Truck_Owners
        fields=[
            'Date',
            'username',
            'Full_name',
            'company_name',
            'Company_Email',
            'company_Registration',
            'phone',
            'gender',
           
        ]

class OrderTrucksSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderTrucks
        fields=[
            'pk',
            'Tarehe',
            'user',
            'from_location',
            'to_location',
            'pickup_location',
            'dropoff_location',
            'plate_number',
            'package_size',
            'current_mileage',
            'year_of_manufacture',
            'transaction_Mobile_payment1',
            'transaction_Mobile_payment2',
            'package_description',
            'final_payment',
            'company_name_sender',
            'sender_name',
            'sender_email',
            'sender_mobile_number',
            'company_name_receiver',
            'receiver_name',
            'email_receiver',
            'total_payment',
            'mobileno_receiver',
            'transaction_id_initial_payment',
            'transaction_id_total_payment',
            'initial_payment',
            'driverfeeval',
            'transaction_id_final_payment',
            'drivernameval',
            'Movingdateval',
            'driverMobile',
            'fuelval',
            'status',
        ]

class OrderProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProductsModel
        fields=[
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
        
            'Directors_name',
            'Manager_name',
            'Officer_worker',
            'Price_bought',
            'order_type',
            'barcode',
            'Location',
            'Package',
            'Number_in_Package',
        ]
class OrderMatumiziSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderMatumiziModels
        fields=[
            'Tarehe',
            'user',
            'Amount',
            'Description',
            
        ]

class DukaProductsSalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsSalesModel
        fields=[
            'pk',
            'Tarehe',
            'Name_of_the_product',
            'user',
            'Product_seller',
            'Selling_price',
            'Number_of_products',
            'Officer_worker',
            'Price_bought',
            'Profit',
            'Number',
            'barcode',
            'Type_of_product',
            'status',
            'company',
            'receipt',
            'quantity',
            'quantity_remained',
            'Product_serial',
            'Description',
            'Customer_name',
            'Customer_phone',

            'Total',
            'info',
        ]

class DukaProductsStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsStockModel
        fields=[
            'pk',
            'Tarehe',
            'Last_Stock_Date',
            'Last_Stock_Date',
            'Name_of_the_product',
            'user',
            'Selling_price',
            'Number_of_products',
            'Officer_worker',
            'Price_bought',
            'Profit',
            'Total_Purchased',
            'Number',
            'barcode',
            'status',
        ]

class WorkerSendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkersRequestsHandlerModels
        fields=[
            'pk',
            'Tarehe',
            'Jina_Mteja',
            'Amount',
            'Mtandao_au_Benki',
            'Salio',
            'status',
            'Location',
            'Forwaded_to',
            'Officer_worker',
            'Wakala_name',
            'Phone',
            'Directors_name',
            'Process',
            'Descriptions',
        ]

class TruckRequestsModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TruckRequestsModel
        fields=[
            'pk',
            'Date',
            'username',
            'Full_name',
            'company_name',
            'Company_Email',
            'company_Registration',
            'phone',
            'Name',
            'Description',
            'Type_of_request',
            'Serial_no',
            'Trailer',
            'Amount',
            'Status',
            'Comment',
            'Prepared_by',
        ]

class TruckRequestsUpdateModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TruckRequestsModel
        fields=[
            'pk',
            'phone',
            'Name',
            'Description',
            'Type_of_request',
            'Serial_no',
            'Trailer',
            'Amount',
            'Status',
            'Comment',
            'Prepared_by',
        ]

class DukaBorrowerUpdateModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = DukaMadeniModels
        fields=[
            'pk',
            'Jina_Mteja',
            'Amount',
            'Description',
            'Product',
            'Quantity',
            'Phone',
            'Tarehe',
            'user',
            'Product_seller',
            'Name_of_the_product',
            'Price_bought', 'Selling_price', 
            'Selling_price', 
            'Number_of_products', 
            'Profit', 
            'Officer_worker', 
            'Wakala_name', 
            'Total_Purchased', 
            'Directors_name', 
            'Type_of_product', 
            'barcode', 'Number', 
            'Customer_name', 
            'Customer_phone', 
            'Total', 
            'Matumizi', 
            'company', 
            'status', 
            'receipt', 
            'quantity_remained', 
            'Product_serial', 
            'Description', 
        ]
class OrderReportSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrdersReportModel
        fields=[
            'pk',
            'Tarehe',
            'jina_kamili',
            'user',
            'Phone',
            'service_officer',
            'Manager',
            'kata',
            'wilaya',
            'mkoa',
            'Jinsia',
            'Account_No',
            'Bank_name',
            'Amount',
            'service_officer_phone',
            'Worker',
            'state',
        ]

class OrderMatumiziSerializers(serializers.ModelSerializer):
    class Meta:
        model = OrdersMatumiziModel
        fields=[
            'pk',
            'Tarehe',
            'jina_kamili',
            'user',
            'Phone',
            'service_officer',
            'Manager',
            'kata',
            'wilaya',
            'mkoa',
            'Jinsia',
            'Account_No',
            'Bank_name',
            'Amount',
            'service_officer_phone',
            'Worker',
        ]



class WapangajiDeletedSerializer(serializers.ModelSerializer):
    class Meta:
        model = wapangajiDeleted
        fields=[
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
        'mwaka',
        'mwezi',
        'kulipia',
        'wilaya_kikazi',
        'House_Owner',
        'kiasi',
        'kata',
        'eneo',
        'muda',
        'nyumbaid',
        'malipo',
        'mwezi1',
        'miezi2',
        'miezi3',
        'year',
        'daily',
        'actual_Dept',
        'service_officer',
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
class SugestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SugestionsModel
        fields=[
        'user',
        'Room',
        'date',

        'Phone',
        'House_Owner',
        'photo',
       
        
    ]

class OrderSugestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderSugestionsModel
        fields=[
        'user',
        'Manager',
        'Director',
        'Phone',
        'Message',
        'Sender',
        'date',
        'photo',
       
        
    ]
class DukaMadeniSerializer(serializers.ModelSerializer):
    # Tarehe = serializers.DateField()
    class Meta:
        model = DukaMadeniModels
        fields=['pk', 'Tarehe', 'user', 'Jina_Mteja', 'Amount', 'Phone', 'Quantity', 'Product', 'Description', 'info', 'company', 'Tarehe', 'Product_seller', 'Name_of_the_product', 'Price_bought', 'Selling_price', 'Number_of_products', 'Profit', 'Officer_worker', 'Wakala_name', 'Total_Purchased', 'Directors_name', 'Type_of_product', 'barcode', 'Number', 'Customer_name', 'Customer_phone', 'Total', 'Matumizi', 'status', 'receipt', 'quantity_remained', 'Product_serial', 'Total',]

class DukaProductsAddedSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsAddedModel
        fields=['pk','Tarehe', 'Last_Stock_Date', 'user', 'Name_of_the_product', 'Price_bought', 'Selling_price', 'Last_Confirmed_Number_of_products', 'Number_of_products', 'Officer_worker', 'Profit', 'Wakala_name', 'Directors_name', 'Total_Purchased', 'Total_Available_product_wise', 'Total_Available', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Matumizi', 'Wholesale_price', 'Wholesale_profit', 'Shelf_No', 'carton', 'company', 'Description', 'Product_number', 'Product_serial', 'Type_of_product', 'Number_of_products_sold', 'status',]
( )

class MalipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Malipo
        fields=[
            'pk',
            'user',
            'jina', 
            'tarehe',
            'Total_pay',
            'loan_repay',
            'Interest_pay',
            'rangi',
            'Balance',
            'receipt_no',
            'kipindi',
            'pin',
            'Simu',
            'Account_no',
            'service_officer',
            'kilichokopwa',
            'HouseOwner',
            'company',
            'tangu',
            'wilaya',
            'mkoa',
            'route',
            'awamu',
            'info',
            'mwezi',
            'mwaka',
            'day',
            
         
        ]

class MalipoDeletedSerializer(serializers.ModelSerializer):
    class Meta:
        model = MalipoDeleted
        fields=[
            'pk',
            'user',
            'jina', 
            'tarehe',
            'Total_pay',
            'loan_repay',
            'Interest_pay',
            'rangi',
            'Balance',
            'service_officer',
            'kipindi',
            'pin',
            'Simu',
            'Account_no',
            'kilichokopwa',
            'tangu',
            'wilaya',
            'mkoa',
            'awamu',
            'info',
        ]
class WorkerTransactionsOverallSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerTransactionsOverall
        fields=[
            'worker',
            # 'wakala',
            'jina',
            'tarehe',
            'Total_pay',
            'Name_of_T_model',
            'Jumla_kinachotoka',
            'Jumla_Kinachoingia',
            'Jumla_Daily',
            'Handled',
            'Jumla_Faida',
            'Daily',
            'Weekly',
            'Monthly',
            'Yealy',
            'Overall',
            'info',
            'Mmiliki_wakala',
            'Registration_no',
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

class DirectorTransactionsOverallSerializer(serializers.ModelSerializer):
    class Meta:
        model = DirectorTransactionsOverall
        fields=[
            'Director',
            # 'wakala',
            'jina',
            'tarehe',
            'Total_pay',
            'Name_of_T_model',
            'Jumla_kinachotoka',
            'Jumla_Kinachoingia',
            'Jumla_Daily',
            'Jumla_Faida',
            'Daily',
            'Weekly',
            'Monthly',
            'Yealy',
            'Overall',
            'info',
            'Mmiliki_wakala',
            'Registration_no',
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


class MkopoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormMkopo
        fields=[
            'id',
            'user',
            'jina',
            'tarehe',
            'RealMkopo',
            'company',
            'Total_mkopo',
            'Account_no',
            'service_officer',
            'Simu',
            'pin',
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
            'day'
            
        ]


class LoanInstallmentSerializer(serializers.ModelSerializer):
    loan_pk = serializers.IntegerField(source='loan_id', read_only=True)
    user = serializers.CharField(source='loan.user', read_only=True)
    jina = serializers.CharField(source='loan.jina', read_only=True)
    Account_no = serializers.CharField(source='loan.Account_no', read_only=True)
    Simu = serializers.CharField(source='loan.Simu', read_only=True)
    pin = serializers.CharField(source='loan.pin', read_only=True)
    RealMkopo = serializers.CharField(source='loan.RealMkopo', read_only=True)
    jumla = serializers.IntegerField(source='loan.jumla', read_only=True)
    Miezi = serializers.CharField(source='loan.Miezi', read_only=True)
    Riba = serializers.CharField(source='loan.Riba', read_only=True)
    Faida = serializers.CharField(source='loan.Faida', read_only=True)
    company = serializers.CharField(source='loan.company', read_only=True)
    paid_amount = serializers.SerializerMethodField()
    balance = serializers.SerializerMethodField()
    promised_date = serializers.DateField(read_only=True, allow_null=True)
    promise_note = serializers.CharField(read_only=True, allow_null=True, allow_blank=True)

    class Meta:
        model = LoanInstallment
        fields = ['id', 'loan_pk', 'sequence', 'due_date', 'scheduled_amount',
                  'paid_amount', 'balance', 'promised_date', 'promise_note', 'user', 'jina', 'Account_no', 'Simu',
                  'pin', 'RealMkopo', 'jumla', 'Miezi', 'Riba', 'Faida', 'company']

    def get_paid_amount(self, installment):
        if hasattr(installment, 'active_paid_amount'):
            return installment.active_paid_amount or Decimal('0.00')
        return sum(installment.payment_allocations.exclude(payment__info__in=['delete', 'deleted']).values_list('amount', flat=True), Decimal('0.00'))

    def get_balance(self, installment):
        return max(Decimal('0.00'), installment.scheduled_amount - self.get_paid_amount(installment))


class LoanInstallmentPromiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanInstallment
        fields = ['id', 'promised_date', 'promise_note']
        extra_kwargs = {
            'promised_date': {'required': False, 'allow_null': True},
            'promise_note': {'required': False, 'allow_null': True, 'allow_blank': True},
        }

    def validate_promised_date(self, value):
        if value and value < timezone.localdate():
            raise serializers.ValidationError('The promised date cannot be in the past.')
        return value


class SikuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Siku
        fields=[
            'pk',
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
class SikuMicrofinanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SikuMicrofinance
        fields=[
            'pk',
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

class HomeOwnerDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseOwnerDay
        fields=[
            'pk',
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
class SikuKopeshaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SikuKopesha
        fields=[
            'pk',
         
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
class SikuToaMicrofinanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SikuToaMicrofinance
        fields=[
            'pk',
            'mwaka',
            'company',
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



class MessejiSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageInfo
        fields=[
            'user',
            'jina',
            'tarehe',
            'RealMkopo',
            'Total_mkopo',
            'Account_no',
            'Simu',
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

class RegisterSerializer(serializers.ModelSerializer):
    # soda = WakalaMmilikiSerializer()
    # the forms send and read "check"; it is saved in the check_no column
    check = serializers.CharField(source='check_no', required=False, allow_blank=True, allow_null=True)
    class Meta:
        model = Register
        fields=[
            'pk',
            'check',
            # 'soda',
            'Username',
            'jina',
            'TSD',
            'Account_no',
            'kata',
            'wilaya',
            'mkoa',
            'Simu',
            'generated_id',
            'company_name',
            'company_username',
            'pin',
            'age',
            'csv',
            'expire',
            'Balance',
            'Jumla_malipo',
            'company',
            'Madai',
            'ofisi',
            'privs',
            'file_no',
            'House_Owner',
            'Registered',
            'status',
            'Password',
            # 'Passport',
    ]

class MieziSerializer(serializers.ModelSerializer):
    class Meta:
        model = Miezi
        fields=[
            'user',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]

class OwnerDepositSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerDeposit
        fields=[
            'user',
            'date',
            'Amount',
            'service_officer',
            'Phone',
            'email',
            'balance',
            'service_officer_phone',
    ]

class WorkerKilichobakiSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerKilichobakiModels
        fields=[
            'Tarehe',
            'MpesaWorking_Balance',
            'Mpesa_Float',
            'Tigopesa',
            'Equity',
            'KCB',
            'Airtel_Money',
            'TPB',
            'NBC',
            'NMB',
            'Access_Bank',
            'Halopesa_SuperAgent',
            'Halopesa_SubSuperAgent',
            'Vodacom_SuperAgent',
            'Vodacom_Agent2',
            'DTB',
            'Halopesa',
            'SELCOM',
            'CRDB',
            'Mkononi',
            'Officer_worker',
            'TTCL_Money',
            'Wakala_name',
            'Directors_name',
            'Total',
            'Status',
            'Output_Status',
            'body',
            'Process',
        ]

class DukaCustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaCustomers
        fields=[
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

class DukaProductsCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DukaProductsCategories
        fields=[
            'pk',
            'Tarehe',
            'user',
            'title',
            'image',
            
       
        ]

class DukaCustomersFilesSerializers(serializers.ModelSerializer):
    class Meta:
        model = DukaCustomersFiles
        fields=[
            'pk',
            'tarehe',
            'customer_name',
            'company',
            'filegiven',
        ]

class WaklaMtajiSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaklaMtajiModels
        fields=[
            'Tarehe',
            'MpesaWorking_Balance',
            'Mpesa_Float',
            'Tigopesa',
            'Equity',
            'KCB',
            'Airtel_Money',
            'Halopesa',
            'Halopesa_SuperAgent',
            'Halopesa_SubSuperAgent',
            'Vodacom_SuperAgent',
            'Vodacom_Agent2',
            'TPB',
            'NBC',
            'NMB',
            'Access_Bank',
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

class MkopoDepositSerializer(serializers.ModelSerializer):
    class Meta:
        model = MkopoDeposit
        fields=[
            'user',
            'date',
            'Amount',
            'service_officer',
            'Phone',
            'email',
            'balance',
            'service_officer_phone',
    ]

class OwnerWithdrawSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerWithdraw
        fields=[
            'user',
            'date',
            'Amount',
            'service_officer',
            'Phone',
            'email',
            'balance',
            'service_officer_phone',
    ]
class MkopoWithdrawSerializer(serializers.ModelSerializer):
    class Meta:
        model = MkopoWithdraw
        fields=[
            'user',
            'date',
            'Amount',
            'service_officer',
            'Phone',
            'Email',
            'balance',
            'service_officer_phone',
    ]
class OrderWithdrawSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderWorkerWithdraw
        fields=[
            'user',
            'date',
            'Amount',
            'service_officer',
            'Phone',
            'Email',
            'balance',
            'service_officer_phone',
    ]

class HouseOwnerMieziSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseOwnerMiezi
        fields=[
            'user',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]

class PersonalToaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalToa
        fields=[
            'user',
            'mwaka',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]
class PersonalWekaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalWeka
        fields=[
            'user',
            'mwaka',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]

class NyumbaInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = NyumbaInfo
        fields=[
            'user',
            'nyumba',
            'Faida',
            'Returns',
            'mwezi',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]

class WakalaMtandaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = WakalaWorkerMtandaoModel
        fields=[
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

class InputMtandaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = InputMtandaoModel
        fields=[
            'username',
            'Wakala_name',
            'Director_name',
            'DTB',
            'CRDB',
            'Nbc',
            'NMB',
            'Access_Bank',
            'Halopesa_SuperAgent',
            'Halopesa_SubSuperAgent',
            'Vodacom_SuperAgent',
            'Vodacom_Agent2',
            'Mpesa',
            'Mpesa_Float',
            'Mpesa_Working_Acc',
            'Halopesa',
            'Selcom',
            'Tigopesa',
            'Equity',
            'KCB',
            'Airtel_Money',
            'TTCL_Money',
            'TPB',
    ]

class MieziToaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MieziToa
        fields=[
            'user',
            'mwaka',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]
class MieziToaMicrofinanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MieziToaMicrofinance
        fields=[
            'company',
            'mwaka',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]
class MieziMicrofinanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MieziMicrofinance
        fields=[
            'company',
            'Faida',
            'mwaka',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]

class MieziNyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MieziNyumba
        fields=[
            'user',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]

class MieziToaNyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MieziToaNyumba
        fields=[
            'user',
            'Faida',
            'Returns',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
    ]
        







# class authSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = authdataModel
#         fields=[
#             'pk',
#             'user',
#             'datavalue',
#         ]

class IdentityCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdentityCard
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'idcard',
        ]

class SlipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slip
        fields=[
            'user',
            'pin',
            'phone',
            'slip',
        ]

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields=[
            'user',
            'pin',
            'phone',
            'photo',
        ]
class PhotoNyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileNyumba
        fields=[
            'user',
            'pin',
            'phone',
            'photo',
        ]

class BankCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankStatement
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'bankstatement',
        ]

class AuthenticationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthenticationModel
        fields=[
            'pk',
            'generated_key',
            'user',
            'Time_logedin',
            'Time_logedout',
            'Time_range',
            'company',
            'Status',
            'Token_key',
        ]
class AtmSerializer(serializers.ModelSerializer):
    class Meta:
        model = AtmCard
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'Atm',
        ]

class kitambulishoSerializer(serializers.ModelSerializer):
    class Meta:
        model = kitambulisho
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'kitambulisho',
        ]

class SlipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slipe
        fields=[
            'user',
            'pin',
            'phone',
            'slip',
        ]

class OwnerKitambulishoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerKitambulisho
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'Kitambulisho',
        ]
class OwnerSlipSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerSlip
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'Slip',
        ]

class OwnerMkatabaSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerMkataba
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'Mkataba',
        ]

class OwnerApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerApplication
        fields=[
            'user',
            'pin',
            'phone',
            'Application',
        ]

class Application_formSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application_form
        fields=[
            'user',
            'pin',
            'phone',
            'application_form',
        ]

class MkatabaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mkataba
        fields=[
            'pk',
            'user',
            'pin',
            'phone',
            'mkataba',
        ]


class LoanAgreementTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanAgreementTemplate
        fields = ['pk', 'company_username', 'title', 'pdf_file', 'uploaded_at']
        read_only_fields = ['pk', 'uploaded_at']

    def validate_title(self, value):
        title = value.strip()
        if not title:
            raise serializers.ValidationError('Enter a name for this agreement form.')
        return title

    def validate_pdf_file(self, uploaded_file):
        if not uploaded_file.name.lower().endswith('.pdf'):
            raise serializers.ValidationError('Choose a PDF file.')
        if uploaded_file.size > 20 * 1024 * 1024:
            raise serializers.ValidationError('PDF files must be 20 MB or smaller.')

        header = uploaded_file.read(1024)
        uploaded_file.seek(0)
        if b'%PDF-' not in header:
            raise serializers.ValidationError('This file does not appear to be a valid PDF.')
        return uploaded_file

class HouseSerializer(serializers.ModelSerializer):
    class Meta: 
        model = HouseModel
        fields=[
            'pk',
            'user',
            'house',
        ]



class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields=[
            'user',
            'Riba',
            'Balance',
            'mwezi',
            'mkopo',
            'Faida',
            'Rejesho_mwezi',
            'Balance_Cash',
        ]


class UserInfoNyumbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfoNyumba
        fields=[
            'user',
            'Jumla_malipo',
            'Jumla_priceDays',
            'Madai',
            'mkopo',
            'Faida',
            'Rejesho_mwezi',
        ]

class UserInfoNyumbaAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfoNyumbaAll
        fields=[
            'user',
            'Jumla_malipo',
            'Jumla_priceDays',
            'Madai',
            'mkopo',
            'Faida',
            'Rejesho_mwezi',
        ]
class HouseOwnerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseOwnerInfo
        fields=[
            'user',
            'Jumla_malipo',
            'Madeni',
            'Deposited',
            'Withdrawn',
            'Balance',
            'Rejesho_mwezi',
        ]


class UserInfoNyumbaAllThemSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfoNyumbaAllThem
        fields=[
            'user',
            'Jumla_malipo',
            'Jumla_priceDays',
            'Madai',
            'mkopo',
            'Faida',
            'Balance',
            'Rejesho_mwezi',
        ]




class EmailSerializer(serializers.ModelSerializer):
    Email_from = serializers.CharField()
    class Meta:
        model = EmailModel
        fields=[
       
            'Service',
            'Email_from',
            'Subject',
            'body',
            'Email_password',
            'Email_to_file',
            'Email_to',
        ]





class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True, label="Confirm pasword")


    def create(self, validated_data):
        user = get_user_model().objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            

        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model =User
        fields = [
            'username',
            'password',
            'password2',
            'email'
           ]


    def validate_password2(self, value):
        data = self.get_initial()
        password = data.get("password")
        # username = data.get("username", None)
        password2 = value
        if password != password2:
            raise ValidationError('passwords must be the same')
        return value








class UserLoginSerializer(serializers.ModelSerializer):
    token = CharField(allow_blank=True, read_only=True)
    username = CharField(allow_blank=True)
    email = EmailField(label="email ", allow_blank=True)
    
    class Meta:
        model = User
        fields =[
            'username',
            'email',
            'password',
            'token',
        ]

        extra_kwargs = {"password":
                                {"write_only": True}
                                }

    def validate(self, data):
        user_obj =None
        email = data.get("email", None)
        username = data.get("username", None)
        password = data["password"]
        if not email and not username:
            raise ValidationError("A username or Email is required to login")

        user =User.objects.filter(
            Q(email=email) |
            Q(username=username)
            ).distinct()
        user = user.exclude(email__isnull=True).exclude(email__iexact='')
        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise ValidationError("This username/email is not valid.")
        if user_obj:
            if not user_obj.check_password(password):
                raise ValidationError("Incorrect password")
        data["token"] = "SOME RANDOM TO"


        return data






class loginSerializer(serializers.ModelSerializer):
    token = CharField(allow_blank=True, read_only=True)
    username = CharField(allow_blank=True)
    email = EmailField(label="email ", allow_blank=True)
    
    class Meta:
        model = loginModel
        fields =[
            'username',
            'email',
            'password',
            'token',
        ]
