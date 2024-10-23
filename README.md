## Задание:
1. Создайте фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework, автодокументацию 
OpenAPI+Swagger и react-router.
2. Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям и отображать 
в клиенте и в API.
3. Где отображать документацию API — решать вам.
4. У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую из категорий, 
а из категории — на любой рецепт этой категории.


## В проекте применены
Frontend:
- сборщик пакетов webpack
- react, установленный инструментом create-react-app
- библиотека для маршрутизации react-router 
- взаимодействие с backend сервером django при помощи HTTP клиента axios  
Backend:
- сервер на основе фреймворка django
- библиотека django rest framework для организации api интерфейса
- инструмент для генерации документации к эндпоинтам swagger
- база данных SQLite


## Установка и запуск среды разработки backend Django

В виртуальное окружение venv клонируем репозиторий: 
git clone https://github.com/MellMoy/NewRecipesSF

Затем инсталлируем необходимые для работы проекта пакеты:
pip install -r requirements.txt

В консоли переходим в директорию проекта и стартуем проект:  
python manage.py runserver

API проекта будет доступно по адресам: 
    path('api/', include('api.urls')), 
    path('api/openapi', include('api.urls')),
    path('api/swagger-ui/', include('api.urls')) ,
    path('api/recipe/', include('api.urls')),
    path('api/recipe/<id>/', include ('api.urls')),
    path('api/category/', include('api.urls')) ,


## Установка и запуск среды разработки frontend React + Webpack

Перезодим : cd frontend
Восстановить модули: `npm install`   
Запуск СЕРВЕРА : `npm start`

Ps : Первая console cd Recipes - python manage.py runserver / Вторая console cd frontend - npm start
                                  !!! НАСЛАЖДАЕМСЯ ПРОЕКТОМ !!!



