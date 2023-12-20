from rest_framework import serializers
from .models import Cita

class CitasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita
        # fields = ('id', 'title', 'description', 'done')
        fields = '__all__'