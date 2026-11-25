from rest_framework import serializers
from ..models import *
from django.contrib.auth import get_user_model
from rest_framework.serializers import CharField, EmailField, ValidationError, SerializerMethodField
from django.db.models import Q
User = get_user_model()


class IndustryRawMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustryRawMaterialsModel
        fields=[
            'pk', 'Tarehe', 'Amount_of_rawmaterial_remained', 'Last_Stock_Date', 'user', 'Name_of_the_product', 'Name_of_raw_materials', 'buying_price', 'Last_Confirmed_Number_of_rawmaterial', 'Number_of_rawproducts', 'Officer_worker', 'Profit', 'Wakala_name', 'Directors_name', 'Total_Purchased', 'amountofproductval', 'Total_Available_Rawmaterial_wise', 'Total_Available', 'photo', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Matumizi', 'Wholesale_price', 'Wholesale_profit', 'Shelf_No', 'carton', 'company', 'Description', 'Rawmaterial_number', 'Rawmaterial_serial', 'Type_of_rawmaterial', 'Amount_of_rawmaterial_used', 'status',
            ]

class IndustryExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustryExpensesModel
        fields=[
            'pk', 'Tarehe', 'Name_of_the_officer', 'Use_of_material', 'user', 'Name_of_raw_materials', 'buying_price', 'Last_Confirmed_Number_of_rawmaterial', 'Number_of_rawproducts', 'Officer_worker', 'Location_of_the_office', 'Total_Available_Rawmaterial_wise', 'Total_Available', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Amount', 'Shelf_No', 'carton', 'company', 'Description', 'Rawmaterial_number', 'Rawmaterial_serial', 'Type_of_rawmaterial', 'Amount_of_rawmaterial_used', 'status',
            ]

class IndustryOutputModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustryOutputModel
        fields=[
             'pk', 'Tarehe', 'Name_of_the_raw_material', 'Amount_of_output', 'user',  'Number_of_output', 'selling_price', 'Remaining', 'Last_Confirmed_Number_of_rawmaterial', 'Name_of_the_given_output', 'Officer_worker', 'Location_of_the_office', 'Wakala_name', 'Directors_name', 'Total_Purchased', 'amountofmaterialval', 'Total_Available_Rawmaterial_wise', 'Total_Available', 'photo', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Matumizi', 'Wholesale_price', 'Wholesale_profit', 'Shelf_No', 'carton', 'company', 'Description', 'Remaining', 'Rawmaterial_number', 'Rawmaterial_serial', 'Type_of_rawmaterial', 'Amount_of_rawmaterial_used', 'status',
            ]
class IndustryWorkersSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustryWorkers
        fields=[
             'pk', 'fullname', 'Workinghours', 'Position', 'Tarehe', 'Birthdate', 'Workinghours', 'Director', 'status', 'Gender', 'Total_sales', 'Physicallocation', 'Total_profit',  'Note', 'Position', 'Total_Bought', 'company',
            ]

class IndustryLossSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustryLoss
        fields=[
            'pk', 'Tarehe', 'cause', 'Officer', 'Amount_cost', 'Discription', 'Director', 'Total_sales',  'Total_profit', 'Total_Bought', 'company', 
            ]
# class JobspostSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = Jobs
#         fields=[
#             'pk', 'applicant_name', 'birthdate', 'location', 'phone', 'email', 'myaddress', 'reffered',  'skills', 
#             ]

class IndustryGeneralDeleteHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustryGeneralDeleteHistory
        fields=[
             'pk', 'Tarehe', 
            ]
