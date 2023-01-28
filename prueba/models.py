from django.conf import settings
from django.db import models
from django.utils import timezone

class Persona(models.Model):
    nombre = models.CharField(max_length=200)
    apellidos = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre + ", " + self.apellidos

class Nacionalidad(models.Model):
    NACIONALIDAD = (
        ('ES','Espania'),
        ('IT', 'Italia'),
        ('FR', 'Francesa'),
    )
    nacionalidad = models.CharField(max_length=2,  choices=NACIONALIDAD)