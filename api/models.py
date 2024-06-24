from django.db import models

# Create your models here.
class ApiDoc(models.Model):

    METHODS = (
        ('GET', 'GET'),
        ('POST', 'POST')
    )

    TYPE = (
        ('USER', 'USER'),
        ('PRODUCT', 'PRODUCT')
    )

    name = models.CharField(max_length=20)
    method = models.CharField(max_length=10, choices=METHODS, default='GET')
    type = models.CharField(max_length=10, choices=TYPE, default='USER')
    url = models.URLField(max_length = 200)
    response = models.JSONField(null=True, blank=True)
    request = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.name