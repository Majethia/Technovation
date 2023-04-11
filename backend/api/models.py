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
    
class TechAThonTeam(models.Model):
    TeamID = models.AutoField(primary_key=True)
    TeamName = models.CharField(max_length=255)
    Leader = models.CharField(max_length=255)
    LeaderNumber = models.CharField(max_length=255)
    LeaderEmail = models.CharField(max_length=255)
    PaymentSS = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"{self.TeamName}"
    
class TechNovaTeam(models.Model):
    TeamID = models.AutoField(primary_key=True)
    TeamName = models.CharField(max_length=255)
    Leader = models.CharField(max_length=255)
    LeaderNumber = models.CharField(max_length=255)
    LeaderEmail = models.CharField(max_length=255)
    PaymentSS = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=255)
    abstract = models.TextField()
    domain = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.TeamName}"
    
class EscapeRoomTeam(models.Model):
    TeamID = models.AutoField(primary_key=True)
    TeamName = models.CharField(max_length=255)
    Leader = models.CharField(max_length=255)
    LeaderNumber = models.CharField(max_length=255)
    LeaderEmail = models.CharField(max_length=255)
    CollegeName = models.CharField(max_length=255)
    PaymentSS = models.ImageField(upload_to='images/')
    team_size = models.IntegerField()

    def __str__(self):
        return f"{self.TeamName}"
    
class NerfArenaTeam(models.Model):
    TeamID = models.AutoField(primary_key=True)
    Leader = models.CharField(max_length=255)
    LeaderNumber = models.CharField(max_length=255)
    LeaderEmail = models.CharField(max_length=255)
    CollegeName = models.CharField(max_length=255)
    PaymentSS = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"{self.Leader}"