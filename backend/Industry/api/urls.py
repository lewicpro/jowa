from django.urls import re_path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
app_name = 'Adworker'
urlpatterns = [

    re_path(r'^Rawmaterial/(?P<company>.+)/$', RawmaterialView.as_view(), name='rawmaterial'),
    re_path(r'^Expenses/(?P<company>.+)/$', ExpensesView.as_view(), name='expenses'),
    re_path(r'^Output/(?P<company>.+)/$', OutputView.as_view(), name='output'),
    re_path(r'^workers/(?P<company>.+)/$', IndustryWorkersViews.as_view(), name='workers'),
    re_path(r'^loss/(?P<company>.+)/$', IndustryLossViews.as_view(), name='loss'),
    re_path(r'^delete/(?P<company>.+)/(?P<section>.+)/(?P<pk>.+)/$', GenDeleteViews.as_view(), name='general'),
]