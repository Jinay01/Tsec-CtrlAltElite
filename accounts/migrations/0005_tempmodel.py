# Generated by Django 3.1.7 on 2021-03-27 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20210327_0150'),
    ]

    operations = [
        migrations.CreateModel(
            name='TempModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', models.FileField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
