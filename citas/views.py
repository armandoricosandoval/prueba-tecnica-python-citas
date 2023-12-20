from rest_framework import viewsets
from .serializer import CitasSerializer
from .models import Cita

# Create your views here.
class CitaView(viewsets.ModelViewSet):
    serializer_class = CitasSerializer
    queryset = Cita.objects.all()