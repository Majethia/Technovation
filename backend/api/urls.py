from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello),
    path('register/', views.register),
    path('register_technova/', views.register_technova),
    path('register_techathon/', views.register_techathon),
    path('register_escape_room/', views.register_escape_room),
    path('register_nerf_arena/', views.register_nerf_arena),
]