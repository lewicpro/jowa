from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
app_name = 'Adworker'
urlpatterns = [

    url(r'^Rawmaterial/(?P<company>.+)/$', RawmaterialView.as_view(), name='rawmaterial'),
    url(r'^Expenses/(?P<company>.+)/$', ExpensesView.as_view(), name='expenses'),
    url(r'^Output/(?P<company>.+)/$', OutputView.as_view(), name='output'),
    url(r'^workers/(?P<company>.+)/$', IndustryWorkersViews.as_view(), name='workers'),
    url(r'^loss/(?P<company>.+)/$', IndustryLossViews.as_view(), name='loss'),
    url(r'^delete/(?P<company>.+)/(?P<section>.+)/(?P<pk>.+)/$', GenDeleteViews.as_view(), name='general'),
]