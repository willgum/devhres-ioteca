from django.db import models


class Autor(models.Model):

    nombre = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Autor"
        verbose_name_plural = "Autores"

    def __str__(self):
        return self.nombre
