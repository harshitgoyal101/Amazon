from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerailizer
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerailizer
    permission_classes = [AllowAny]