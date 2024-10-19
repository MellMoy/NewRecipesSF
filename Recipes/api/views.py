from dishes.models import Dishes
from .serializers import CategoriesSerializer, DishesSerializer, RecipesSerializer
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view


class Categories_view(ReadOnlyModelViewSet):
    queryset = Dishes.objects.values('categoryType').distinct()
    print(queryset)
    serializer_class = CategoriesSerializer

class Recipes_view(ReadOnlyModelViewSet):
    queryset = Dishes.objects.all()
    print(queryset)
    setter_class = RecipesSerializer

    def get_serializer_class(self):

        return RecipesSerializer


@api_view(['GET'])
def dishes_view(request):
    if request.method == 'GET':
        dishes = Dishes.objects.filter(categoryType=request.query_params['category'])
        serializer = DishesSerializer(dishes, many=True)
        return Response(serializer.data)
