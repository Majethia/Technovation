from django.http import JsonResponse
from .models import Team
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def hello(request):
    return JsonResponse({"Respone":"OK", "Backend":"Django", "Status":"up"})


@csrf_exempt
def register(request):
    if request.method == 'POST':
        image = request.FILES['image']
        main_event = request.POST['mainEvent']
        mini_event = request.POST['escapeRoom']
        if int(mini_event) == 200:
            mini_event = "Escape Room"
        elif int(mini_event) == 0:
            mini_event = None
        
        if mini_event:
            EventsRegistered = main_event + " and " + mini_event
        else:
            EventsRegistered = main_event

        t = Team(
            TeamName = request.POST['teamName'],
            Leader = request.POST['leader'],
            LeaderNumber = request.POST['leaderNumber'],
            LeaderEmail = request.POST['leaderEmail'],
            CollegeName = request.POST['collegeName'],
            EventsRegistered = EventsRegistered,
            PaymentSS = image
        )
        t.save()
        return JsonResponse({"Response": "OK"})
    return JsonResponse({"Response": "Post Request Required"})