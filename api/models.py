from django.db import models

# Create your models here.
class ApiDoc(models.Model):
    name = models.CharField(max_length=20)
    url = models.TextField()
    response = models.JSONField()
    request = models.JSONField()

    def __str__(self):
        return self.name