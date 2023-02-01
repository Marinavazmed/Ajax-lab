from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('', views.registro, name='personas'),
    path('noticias/', views.noticias, name='noticias'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
