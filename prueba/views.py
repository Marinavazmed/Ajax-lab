from django.shortcuts import render
import json
from django.http import HttpResponseBadRequest, JsonResponse
from django.template.loader import render_to_string

from prueba.models import *

# Create your views here.
def index(request):
    return render(request, 'prueba/index.html', {})
# def prueba_clase(request):
#     if(request.headers.get('X-Requested-With') == 'XMLHttpRequest'):
#         if request.method == 'GET':
#             noticias = [
#                 {'titular': "Noticia 1",'resumen': "Resumen de la noticia 1",'descripcion': "Esta es la noticia 1"},
#                 {'titular': "Noticia 2",'resumen': "Resumen de la noticia 2",'descripcion': "Esta es la noticia 2"},
#                 {'titular': "Noticia 3",'resumen': "Resumen de la noticia 3",'descripcion': "Esta es la noticia 3"}];
#             return JsonResponse({'context':noticias})
#     return render(request, 'prueba/noticias.html', {})


def prueba(request):
    if(request.headers.get('X-Requested-With') == 'XMLHttpRequest'):
        if request.method == 'GET':
            j_son = [
                {'clase_pais': "usa",
				'ciudad_h2':"New York, New York",
				'detalle_precio_total': "1,899",
				'detalle_num_noches' : 7,
				'precio_noche' : 275,
				'ruta_imagen' : "static/imagenes/newyork.jpg",
				'pie_imagen' : "Puente de Brooklyn"},

                {'clase_pais': "paris",
                 'ciudad_h2': "Paris, Francia",
                 'detalle_precio_total': "1,499",
                 'detalle_num_noches': 5,
                 'precio_noche': 300,
                 'ruta_imagen': "static/imagenes/paris.jpg",
                 'pie_imagen': "Notre Dame de Paris"},

                {'clase_pais': "uk",
                 'ciudad_h2': "Londres, Reino Unido",
                 'detalle_precio_total': "2,199",
                 'detalle_num_noches': 5,
                 'precio_noche': 440,
                 'ruta_imagen': "static/imagenes/london.jpg",
                 'pie_imagen': "Torre de Londres"}


            ];
            return JsonResponse({'j_son': j_son})
    return render(request, 'prueba/examen.html', {})
