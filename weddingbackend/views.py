from django.conf import settings
from django.http import HttpRequest
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def homepage(request: HttpRequest):
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html')
