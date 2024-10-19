from rest_framework import serializers
from dishes.models import Dishes



class CategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dishes
        fields = ('categoryType',)



class RecipesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dishes
        fields = ['id', 'name', 'categoryType','description']



class DishesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dishes
        fields = ('id', 'name', 'categoryType')


