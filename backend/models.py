# clothing/models.py
from django.db import models

class ClothingItem(models.Model):
    image_path = models.CharField(max_length=255)
    category = models.CharField(max_length=50)
    clothing_type = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.category} - {self.clothing_type}'
