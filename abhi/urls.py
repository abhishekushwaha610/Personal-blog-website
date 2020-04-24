
from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from post.views import  addFeedback

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ckeditor/',include("ckeditor_uploader.urls")),

    path("api/",include('post.urls')),
    path("sending/",addFeedback),
    path('',TemplateView.as_view(template_name='index.html'),),
    path('<str>',TemplateView.as_view(template_name='index.html'),name="index"),
]
