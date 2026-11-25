from django.contrib import admin
from .models import *

class IndustryRawMaterialsAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe', 'Amount_of_rawmaterial_remained', 'Last_Stock_Date', 'user', 'Name_of_the_product', 'Name_of_raw_materials', 'buying_price', 'Last_Confirmed_Number_of_rawmaterial', 'Number_of_rawproducts', 'Officer_worker', 'Profit', 'Wakala_name', 'Directors_name', 'Total_Purchased', 'amountofproductval', 'Total_Available_Rawmaterial_wise', 'Total_Available', 'photo', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Matumizi', 'Wholesale_price', 'Wholesale_profit', 'Shelf_No', 'carton', 'company', 'Description', 'Rawmaterial_number', 'Rawmaterial_serial', 'Type_of_rawmaterial', 'Amount_of_rawmaterial_used', 'status',
    ]
class IndustryOutputAdmin(admin.ModelAdmin):
    list_display =[
       'Tarehe', 'Name_of_the_raw_material', 'Amount_of_output', 'user', 'Number_of_output', 'selling_price', 'Last_Confirmed_Number_of_rawmaterial', 'Name_of_the_given_output', 'Officer_worker', 'Location_of_the_office', 'Wakala_name', 'Directors_name', 'Total_Purchased', 'amountofmaterialval', 'Total_Available_Rawmaterial_wise', 'Total_Available', 'photo', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Matumizi', 'Wholesale_price', 'Wholesale_profit', 'Shelf_No', 'carton', 'company', 'Description', 'Rawmaterial_number', 'Rawmaterial_serial', 'Type_of_rawmaterial', 'Amount_of_rawmaterial_used', 'status',
    ]
class IndustryExpensesModelAdmin(admin.ModelAdmin):
    list_display =[
       'Tarehe', 'Name_of_the_officer', 'Use_of_material', 'user', 'Name_of_raw_materials', 'buying_price', 'Last_Confirmed_Number_of_rawmaterial', 'Number_of_rawproducts', 'Officer_worker', 'Location_of_the_office', 'Total_Available_Rawmaterial_wise', 'Total_Available', 'Total_profit', 'Total_profit_product_wise', 'Total_brought_product_wise', 'barcode', 'Amount', 'Shelf_No', 'carton', 'company', 'Description', 'Rawmaterial_number', 'Rawmaterial_serial', 'Type_of_rawmaterial', 'Amount_of_rawmaterial_used', 'status',
    ]

class IndustryWorkersAdmin(admin.ModelAdmin):
    list_display =[
       'fullname', 'Workinghours', 'Position', 'Director', 'Total_sales', 'Total_profit', 'Total_Bought', 'company',
    ]
class IndustryLossAdmin(admin.ModelAdmin):
    list_display =[
        'Tarehe', 'Amount_cost', 'Discription', 'Director', 'Total_sales', 'Total_profit', 'Total_Bought', 'company', 
    ]

admin.site.register(IndustryRawMaterialsModel, IndustryRawMaterialsAdmin)
admin.site.register(IndustryOutputModel, IndustryOutputAdmin)
admin.site.register(IndustryExpensesModel, IndustryExpensesModelAdmin)
admin.site.register(IndustryWorkers, IndustryWorkersAdmin)
admin.site.register(IndustryLoss, IndustryLossAdmin)