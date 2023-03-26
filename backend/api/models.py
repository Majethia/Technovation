from django.db import models

# Create your models here.
class Team(models.Model):
    TeamID = models.AutoField(primary_key=True)
    TeamName = models.CharField(max_length=255)
    Leader = models.CharField(max_length=255)
    LeaderNumber = models.CharField(max_length=255)
    LeaderEmail = models.CharField(max_length=255)
    CollegeName = models.CharField(max_length=255)
    PaymentSS = models.ImageField(upload_to='images/')
    EventsRegistered = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.TeamName}"