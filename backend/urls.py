# clothing/urls.py
from django.urls import path
from .views import ClothingItemList, ClothingItemDetail, RecommendClothing
from .views import LoadClothingData
urlpatterns = [
    path('clothing/<str:category>/', ClothingItemList.as_view(), name='clothing-list'),
    path('clothing/item/<int:pk>/', ClothingItemDetail.as_view(), name='clothing-detail'),
     path('clothing/recommend/<int:pk>/', RecommendClothing.as_view(), name='clothing-recommend'),
     path('load-data/', LoadClothingData.as_view(), name='load-data'),
]
