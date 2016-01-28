from rest_framework import serializers, viewsets
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
