from django.shortcuts import render

# This is the view that you imported in the frontend/urls.py
def indexView(request):
    return render(request, "frontend/index.html") 