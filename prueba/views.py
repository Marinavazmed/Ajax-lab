from django.shortcuts import render
import json
from django.http import HttpResponseBadRequest, JsonResponse
from prueba.models import *

# Create your views here.
def registro(request):
    if(request.headers.get('X-Requested-With') == 'XMLHttpRequest'):
        if request.method == 'POST':
            data = json.load(request)
            mapeado = Persona(nombre=data.get('nombre'), apellidos=data.get('apellidos'))
            mapeado.save()
            return JsonResponse({'status': 'Nueva persona añadida.'})
        if request.method == 'GET':
            personas = list(Persona.objects.all().values())
            return JsonResponse({'context': personas})
        return JsonResponse({'status': 'Registro fallido'}, status=400)
    else:
        return render(request, 'prueba/index.html', {})