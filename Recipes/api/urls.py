from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import Categories_view, dishes_view, Recipes_view

from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView

from rest_framework import routers

from . import views





router = DefaultRouter()
router.register('categories', Categories_view)
router.register('recipes', Recipes_view, basename='recipes')

urlpatterns = [
    path('', include(router.urls)),
    path('dishes/', dishes_view),
    path('openapi', get_schema_view(
        title="Your Project",
        description="SF HW-04",
    ), name='openapi-schema'),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui'),
]