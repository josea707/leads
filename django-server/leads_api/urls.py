from django.urls import path
from . import views

urlpatterns = [
    path('', views.leads_list),
    path('<str:pk>/', views.leads_details)
]
