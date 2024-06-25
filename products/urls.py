from django.urls import path
from .api import ProductViewSet

urlpatterns = [
    path("api/products", ProductViewSet.as_view(), name="products")
]
