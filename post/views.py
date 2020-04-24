from django.shortcuts import render,redirect
from .models import Post,Feedback
from .serializers import PostSerializer,FeedbackSerializer
from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView,RetrieveAPIView,ListCreateAPIView
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from django.contrib import messages
class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'

class FeedbackInsertion(ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

@csrf_exempt
def addFeedback(request):
    if request.method == "POST":
        name = request.POST["name"]
        desc = request.POST["desc"]
        feedback = Feedback.objects.create(name=name,desc=desc)
        feedback.save()
        messages.success(request,"Thank for Feedback!")
    return redirect('/feedback')