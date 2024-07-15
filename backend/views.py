# clothing/views.py
from rest_framework import generics
from .models import ClothingItem
from .serializers import ClothingItemSerializer

import csv
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
import numpy as np
import pandas as pd

class LoadClothingData(APIView):
    def get(self, request):
        with open('C:/Users/ANUSHA/OneDrive/Desktop/myntra_hackathon/backend/dataa/clothing_features_media.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                ClothingItem.objects.create(
                    image_path=row['image_path2'],
                    category=row['category'],
                    clothing_type=row['clothing_type']
                )
        return Response({'status': 'Data loaded successfully'})
    

class ClothingItemList(generics.ListAPIView):
    serializer_class = ClothingItemSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        return ClothingItem.objects.filter(category=category)

class ClothingItemDetail(generics.RetrieveAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer



class RecommendClothing(APIView):
    def get(self, request, pk):
        try:
            item = ClothingItem.objects.get(pk=pk)
        except ClothingItem.DoesNotExist:
            return Response({'error': 'Clothing item not found'}, status=404)

        df = pd.read_csv(settings.CLOTHING_FEATURES_CSV)
        similarity_matrix = np.load(settings.SIMILARITY_MATRIX_NPY)

        idx = df[df['image_path2'] == item.image_path].index[0]
        sim_scores = list(enumerate(similarity_matrix[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:6]  # Exclude the image itself and get top 5 recommendations

        recommendations = [
            {
                'image_path': df.iloc[i]['image_path2'],
                'category': df.iloc[i]['category'],
                'clothing_type': df.iloc[i]['clothing_type'],
                'score': score
            }
            for i, score in sim_scores
        ]

        return Response(recommendations)