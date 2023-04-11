from django.contrib import admin
from .models import Team, TechAThonTeam, TechNovaTeam, EscapeRoomTeam, NerfArenaTeam
# Register your models here.
admin.site.register(Team)
admin.site.register(TechNovaTeam)
admin.site.register(TechAThonTeam)
admin.site.register(EscapeRoomTeam)
admin.site.register(NerfArenaTeam)