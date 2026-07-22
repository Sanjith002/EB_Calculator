from django.urls import path
from .views import getbill

urlpatterns = [
    path('', getbill)
]