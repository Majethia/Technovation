# Generated by Django 4.1.7 on 2023-04-11 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_remove_team_teamdomain_remove_team_teamemail_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="EscapeRoomTeam",
            fields=[
                ("TeamID", models.AutoField(primary_key=True, serialize=False)),
                ("TeamName", models.CharField(max_length=255)),
                ("Leader", models.CharField(max_length=255)),
                ("LeaderNumber", models.CharField(max_length=255)),
                ("LeaderEmail", models.CharField(max_length=255)),
                ("CollegeName", models.CharField(max_length=255)),
                ("PaymentSS", models.ImageField(upload_to="images/")),
                ("team_size", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="NerfArenaTeam",
            fields=[
                ("TeamID", models.AutoField(primary_key=True, serialize=False)),
                ("Leader", models.CharField(max_length=255)),
                ("LeaderNumber", models.CharField(max_length=255)),
                ("LeaderEmail", models.CharField(max_length=255)),
                ("CollegeName", models.CharField(max_length=255)),
                ("PaymentSS", models.ImageField(upload_to="images/")),
            ],
        ),
        migrations.CreateModel(
            name="TechNovaTeam",
            fields=[
                ("TeamID", models.AutoField(primary_key=True, serialize=False)),
                ("TeamName", models.CharField(max_length=255)),
                ("Leader", models.CharField(max_length=255)),
                ("LeaderNumber", models.CharField(max_length=255)),
                ("LeaderEmail", models.CharField(max_length=255)),
                ("PaymentSS", models.ImageField(upload_to="images/")),
            ],
        ),
        migrations.CreateModel(
            name="TechNovationTeam",
            fields=[
                ("TeamID", models.AutoField(primary_key=True, serialize=False)),
                ("TeamName", models.CharField(max_length=255)),
                ("Leader", models.CharField(max_length=255)),
                ("LeaderNumber", models.CharField(max_length=255)),
                ("LeaderEmail", models.CharField(max_length=255)),
                ("PaymentSS", models.ImageField(upload_to="images/")),
                ("title", models.CharField(max_length=255)),
                ("abstract", models.TextField()),
                ("domain", models.CharField(max_length=255)),
            ],
        ),
    ]
