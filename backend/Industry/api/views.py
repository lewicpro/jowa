
from rest_framework import generics, mixins
from ..models import *
import re
from dateutil.parser import parse
from .serializers import *
from .permissions import IsOwnerOrReadOnly
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
import csv
from django.db.models import Sum,Count,F,Max,Min
import smtplib
from datetime import datetime, timedelta
from django.conf import settings
from django.utils import timezone
import urllib
from django.http import HttpResponseRedirect, HttpResponse
import json
# from rest_framework.pagination import PageNumberPagination
from .pagination import PostLimitOffsetPagination, PostPageNumberPagination

import requests
from django.db.models import Sum
import datetime
from email.mime.text import MIMEText
from rest_framework.response import Response
# from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
# from rest_framework.views import APIView



class RawmaterialView( generics.CreateAPIView, generics.ListAPIView):
	lookup_field = 'pk'
	serializer_class = IndustryRawMaterialSerializer
	permission_classes = [AllowAny]


	def get_queryset(self):
		company = self.kwargs['company']
		return IndustryRawMaterialsModel.objects.filter(company=company)


class ExpensesView( generics.CreateAPIView, generics.ListAPIView):
	lookup_field = 'pk'
	serializer_class = IndustryExpensesSerializer
	permission_classes = [AllowAny]


	def get_queryset(self):
		company = self.kwargs['company']
		return IndustryExpensesModel.objects.filter(company=company)


class OutputView( generics.CreateAPIView, generics.ListAPIView):
	lookup_field = 'pk'
	serializer_class = IndustryOutputModelSerializer
	permission_classes = [AllowAny]


	def get_queryset(self):
		company = self.kwargs['company']
		return IndustryOutputModel.objects.filter(company=company)

class IndustryWorkersViews( generics.CreateAPIView, generics.ListAPIView):
	lookup_field = 'pk'
	serializer_class = IndustryWorkersSerializer
	permission_classes = [AllowAny]


	def get_queryset(self):
		company = self.kwargs['company']
		return IndustryWorkers.objects.filter(company=company)

class IndustryLossViews( generics.CreateAPIView, generics.ListAPIView):
	lookup_field = 'pk'
	serializer_class = IndustryLossSerializer
	permission_classes = [AllowAny]


	def get_queryset(self):
		company = self.kwargs['company']
		return IndustryLoss.objects.filter(company=company)


class GenDeleteViews( generics.CreateAPIView, generics.ListAPIView):
	lookup_field = 'pk'
	serializer_class = IndustryGeneralDeleteHistorySerializer
	permission_classes = [AllowAny]


	def get_queryset(self):
		company = self.kwargs['company']
		return IndustryGeneralDeleteHistory.objects.filter(company=company)

	def post(self, request, *args, **kwargs):
		data = request.data
		pk = self.kwargs['pk']
		section = self.kwargs['section']
		company = self.kwargs['company']
		serializer = IndustryGeneralDeleteHistorySerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			if section == 'loss':
				updt=IndustryLoss.objects.filter(pk=pk).delete()
			if section == 'output':
				updt=IndustryOutputModel.objects.filter(pk=pk).delete()
			if section == 'expenses':
				updt=IndustryExpensesModel.objects.filter(pk=pk).delete()
			if section == 'rawmaterial':
				updt=IndustryRawMaterialsModel.objects.filter(pk=pk).delete()
			if section == 'worker':
				updt=IndustryWorkers.objects.filter(pk=pk).delete()
			return Response(serializer.validated_data)


