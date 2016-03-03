from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from ..models.Autor import Autor
from ..utils import MiSetPagination


class AutorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Autor
        # fields = ('url', 'username', 'email', 'is_staff')


class AutorViewSet(viewsets.ModelViewSet):
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer
    pagination_class = MiSetPagination

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(nombre__icontains=query),
                    Q(direccion__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
