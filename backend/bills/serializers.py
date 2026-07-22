from rest_framework import serializers

class CalculateBillSerializer(serializers.Serializer):
    units = serializers.IntegerField(min_value = 0)