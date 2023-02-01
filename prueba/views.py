from django.shortcuts import render
import json
from django.http import HttpResponseBadRequest, JsonResponse
from django.template.loader import render_to_string

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

def noticias(request):
    if(request.headers.get('X-Requested-With') == 'XMLHttpRequest'):
        if request.method == 'GET':
            filtro = request.GET.get('filtro')
            print(filtro)
            if(filtro):
                noticias=[
                    {'titular': "Noticia 1", 'resumen': "Resumen de la noticia 1",
                     'descripcion': "Esta es la noticia 1"}
                ]
            else:

                noticias = [
                    {'titular': "Noticia 1",'resumen': "Resumen de la noticia 1",'descripcion': "Esta es la noticia 1"},
                    {'titular': "Noticia 2",'resumen': "Resumen de la noticia 2",'descripcion': "Esta es la noticia 2"},
                    {'titular': "Noticia 3",'resumen': "Resumen de la noticia 3",'descripcion': "Esta es la noticia 3"}];

            return JsonResponse({'context':noticias})
    return render(request, 'prueba/noticias.html', {})
