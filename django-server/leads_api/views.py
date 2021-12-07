from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.utils import timezone
from .serializers import LeadSerializer
import logging
from .models import Lead

logger = logging.getLogger(__name__)


@api_view(['GET', 'POST'])
def leads_list(request):
    if request.method == 'GET':
        leads = Lead.objects.all()
        serializer = LeadSerializer(leads, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = LeadSerializer(data=request.data)
        if not serializer.is_valid():
            return Response('There was an error creating your lead, Please try again!',
                            status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def leads_details(request, pk):
    try:
        lead = Lead.objects.get(pk=pk)
    except Lead.DoesNotExist:
        return Response('Lead not Found', status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = LeadSerializer(lead, many=False)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = LeadSerializer(instance=lead, data=request.data)
        if not serializer.is_valid():
            return Response('There was an error updating your lead, Please try again!', status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        lead.delete()
        return Response('Item successfully deleted!')
