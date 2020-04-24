from django.urls import path
from .views import PostDetailView,PostListView,FeedbackInsertion
urlpatterns = [
    path("",PostListView.as_view()),
    path("<slug>",PostDetailView.as_view()),
    path("feedback/",FeedbackInsertion.as_view())
]
