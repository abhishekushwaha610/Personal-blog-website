from django.db import models
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField

class Post(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50,null=True,blank=True,unique=True)
    tag = models.CharField(max_length=10)
    description = RichTextUploadingField(null=True, blank=True)
    time = models.DateTimeField(auto_now=True)

    def save(self,*args,**kwargs):
        self.slug = slugify(self.title)
        super(*args,**kwargs).save()

    def __str__(self):
        return self.title

class Feedback(models.Model):
    name = models.CharField(max_length=30)
    desc = models.TextField()

    def __str__(self):
        return self.name