from django.urls import path
from .views import indexView  # the view responsible for the frontend
from django.urls import re_path

urlpatterns = [
    re_path(r".*", indexView),  # add the view to the url
]