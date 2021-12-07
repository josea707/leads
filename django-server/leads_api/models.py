from django.db import models
from django.utils import timezone

# Create your models here.


class Lead(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    contacted = models.BooleanField()
    notes = models.CharField(max_length=250)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.first_name

    def save(self, *args, **kwargs):
        self.updated = timezone.now()
        return super().save(*args, **kwargs)
