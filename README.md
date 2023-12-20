#Pruebas Tecnicas Armando Rico

cd client && npm install && npm run build && cd .. && 
pip install virtualenv
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install coreapi
pip install whitenoise

base de datos
python manage.py makemigrations
python manage.py migrate

iniciar
 python manage.py runserver

python manage.py migrate && python manage.py collectstatic && gunicorn django_api.wsgi