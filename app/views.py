from django.shortcuts import render


# Create your views here.


def index(request):
    return render(request, "index.html", {})


def work(request):
    return render(request, "work.html", {})


def about(request):
    return render(request, "about.html", {})


def discount(request):
    return render(request, "discount.html", {})
