from rest_framework import serializers, viewsets
from ..models.Categoria import Categoria


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        # fields = ('url', 'username', 'email', 'is_staff')


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
