# Generated by Django 3.2.9 on 2021-12-07 12:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('leads_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='updated',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
