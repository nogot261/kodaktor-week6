# Kodaktor Week 6

Решение задания: https://kodaktor.ru/g/week6

## Запуск

```bash
npm install
npm start
```

По умолчанию сервер слушает порт `4321`.

```bash
http://localhost:4321/login/
http://localhost:4321/code/
http://localhost:4321/sha1/test/
```

Если логин LMS отличается от `dieuvina`, его можно передать через переменную окружения:

```bash
LOGIN=my_login npm start
```

Для Render/другого хостинга используется переменная `PORT`, которую платформа задает сама.
