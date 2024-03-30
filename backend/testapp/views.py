from django.shortcuts import render
from datetime import datetime
from rest_framework.response import Response 
from rest_framework.decorators import api_view

@api_view(['GET'])
def index(request):
    current_time = datetime.now().strftime("%-I:%S %p")
    current_date = datetime.now().strftime("%A %m %-Y")

    data = {
        'time': current_time,
        'date': current_date,
    }

    # return JsonResponse(data)
    return Response(data)
