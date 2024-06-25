from .models import Product
from rest_framework import generics, permissions
from .serializers import ProductSerializer
from slugify import slugify

class ProductViewSet(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(slug=slugify(self.name))
        else:
            print(serializer.errors)