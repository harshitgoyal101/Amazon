from django.contrib import admin
from .models import ApiDoc
from django.db.models import JSONField
from django_json_widget.widgets import JSONEditorWidget

# Register your models here.
@admin.register(ApiDoc)
class ApiDocAdmin(admin.ModelAdmin):
    fields = ("name", "method", "type", "url", "request", "response")
    list_display = ("name", "method", "url", "type")
    list_filter = ("method", "type")

    formfield_overrides = {
        JSONField: {'widget': JSONEditorWidget},
    }
    