from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CalculateBillSerializer
from rest_framework import status

@api_view(["POST"])
def getbill(request):
    serializer = CalculateBillSerializer(data = request.data)

    if serializer.is_valid():
        units = serializer.validated_data["units"] 


        if units <= 200:
            return Response({
                "breakdown": [
                {
                    "slab": "0 - 200 units",
                    "units": f"{units}",
                    "rate": "0",
                    "calculation": f"{units} x 0",
                    "amount": "₹0.00"
                }
            ],
            "Estimated bill": "₹0.00"
            })
        elif units <= 400:
            units = units - 200
            return Response({
                "breakdown": [
                {
                    "slab": "0 - 200 units",
                    "units": "200",
                    "rate": "0",
                    "calculation": "200 x 0",
                    "amount": "₹0"
                },
                {
                    "slab": "201 - 400 units",
                    "units": f"{units}",
                    "rate": "4.70",
                    "calculation": f"{units} x 4.70",
                    "amount": f"₹{units * 4.70:.2f}"
                }
            ],
            "Estimated bill": f"₹{units * 4.70:.2f}"
            })
        elif units <= 500:
            units = units - 400
            bill = 200 * 4.70 
            return Response({
                "breakdown": [
                {
                    "slab": "0 - 200 units",
                    "units": "100",
                    "rate": "0",
                    "calculation": "100 x 0",
                    "amount": "₹0"
                },
                {
                    "slab": "201 - 400 units",
                    "units": "200",
                    "rate": "4.70",
                    "calculation": "200 x 4.70",
                    "amount": "₹940.00"
                },
                {
                    "slab": "401 - 500 units",
                    "units": f"{units}",
                    "rate": "6.30",
                    "calculation": f"{units} x 6.30",
                    "amount": f"₹{units * 6.30:.2f}"
                },
                ],
                "Estimated bill": f"₹{bill + units * 6.30:.2f}"
            })
        elif units <= 600:
            units = units - 500
            bill = 300 * 4.70 + 100 * 6.30
            return Response({
                "breakdown": [
                {
                    "slab": "0 - 100 units",
                    "units": "100",
                    "rate": "0",
                    "calculation": "100 x 0",
                    "amount": "₹0"
                },
                {
                    "slab": "101 - 400 units",
                    "units": "300",
                    "rate": "4.70",
                    "calculation": "300 x 4.70",
                    "amount": "₹1410.00"
                },
                {
                    "slab": "401 - 500 units",
                    "units": "100",
                    "rate": "6.30",
                    "calculation": "100 x 6.30",
                    "amount": "₹630.00"
                },
                {
                    "slab": "501 - 600 units",
                    "units": f"{units}",
                    "rate": "8.40",
                    "calculation": f"{units} x 8.40",
                    "amount": f"₹{units * 8.40:.2f}"
                }
            ],
            "Estimated bill": f"₹{bill + units * 8.40:.2f}"
            })
        elif units <= 800:
            units = units - 600
            bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40
            return Response({
                "breakdown": [
                {
                    "slab": "0 - 100 units",
                    "units": "100",
                    "rate": "0",
                    "calculation": "100 x 0",
                    "amount": "₹0"
                },
                {
                    "slab": "101 - 400 units",
                    "units": "300",
                    "rate": "4.70",
                    "calculation": "300 x 4.70",
                    "amount": "₹1410.00"
                },
                {
                    "slab": "401 - 500 units",
                    "units": "100",
                    "rate": "6.30",
                    "calculation": "100 x 6.30",
                    "amount": "₹630.00"
                },
                {
                    "slab": "501 - 600 units",
                    "units": "100",
                    "rate": "8.40",
                    "calculation": "100 x 8.40",
                    "amount": "₹840.00"
                },
                {
                    "slab": "601 - 800 units",
                    "units": f"{units}",
                    "rate": "9.45",
                    "calculation": f"{units} x 9.45",
                    "amount": f"₹{units * 9.45:.2f}"
                }
            ],
            "Estimated bill": f"₹{bill + units * 9.45:.2f}"
                })
        elif units <= 1000:
            units = units - 800
            bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45
            return Response({
                "breakdown": [
                {
                    "slab": "0 - 100 units",
                    "units": "100",
                    "rate": "0",
                    "calculation": "100 x 0",
                    "amount": "₹0"
                },
                {
                    "slab": "101 - 400 units",
                    "units": "300",
                    "rate": "4.70",
                    "calculation": "300 x 4.70",
                    "amount": "₹1410.00"
                },
                {
                    "slab": "401 - 500 units",
                    "units": "100",
                    "rate": "6.30",
                    "calculation": "100 x 6.30",
                    "amount": "₹630.00"
                },
                {
                    "slab": "501 - 600 units",
                    "units": "100",
                    "rate": "8.40",
                    "calculation": "100 x 8.40",
                    "amount": "₹840.00"
                },
                {
                    "slab": "601 - 800 units",
                    "units": "200",
                    "rate": "9.45",
                    "calculation": "200 x 9.45",
                    "amount": "₹1890.00"
                },
                {
                    "slab": "801 - 1000 units",
                    "units": f"{units}",
                    "rate": "10.50",
                    "calculation": f"{units} x 10.50",
                    "amount": f"₹{units * 10.50:.2f}"
                }
            ],
            "Estimated bill": f"₹{bill + units * 10.50:.2f}"
            })
        else:
            units = units - 1000
            bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45 + 200 * 10.50
            return Response({
                "breakdown": [
                {
                    "slab": "0 - 100 units",
                    "units": "100",
                    "rate": "0",
                    "calculation": "100 x 0",
                    "amount": "₹0"
                },
                {
                    "slab": "101 - 400 units",
                    "units": "300",
                    "rate": "4.70",
                    "calculation": "300 x 4.70",
                    "amount": "₹1410.00"
                },
                {
                    "slab": "401 - 500 units",
                    "units": "100",
                    "rate": "6.30",
                    "calculation": "100 x 6.30",
                    "amount": "₹630.00"
                },
                {
                    "slab": "501 - 600 units",
                    "units": "100",
                    "rate": "8.40",
                    "calculation": "100 x 8.40",
                    "amount": "₹840.00"
                },
                {
                    "slab": "601 - 800 units",
                    "units": "200",
                    "rate": "9.45",
                    "calculation": "200 x 9.45",
                    "amount": "₹1890.00"
                },
                {
                    "slab": "801 - 1000 units",
                    "units": "200",
                    "rate": "10.50",
                    "calculation": "200 x 10.50",
                    "amount": "₹2100.00"
                },
                {
                    "slab": "Above 1000 units",
                    "units": f"{units}",
                    "rate": "11.55",
                    "calculation": f"{units} x 11.55",
                    "amount": f"₹{units * 11.55:.2f}"
                }
            ],
            "Estimated bill": f"₹{bill + units * 11.55:.2f}"
            })
    
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)