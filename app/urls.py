from django.conf.urls import url
from app import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^about/$', views.about, name='about'),
    url(r'^work/$', views.work, name='work'),
]
