# Отчет по лабораторной работе Kodaktor Week 6

Ссылка на опубликованное приложение:

https://kodaktor-week6.onrender.com/

## Цель работы

Разработать небольшое серверное приложение на Node.js и Express, которое обрабатывает маршруты из задания Kodaktor и доступно по HTTPS после деплоя.

## Что реализовано

- `GET /login/` возвращает логин Moodle: `dieuvina`.
- `GET /code/` возвращает исходный код обработчика из `app.js`.
- `GET /sha1/:input/` возвращает SHA1-хеш переданной строки.
- `POST /req/` принимает тело запроса и возвращает JSON с методом, заголовками, body и query.
- Для остальных маршрутов возвращается `Bad request`.
- Добавлены CORS-заголовки для `https://kodaktor.ru`.
- Добавлен `Dockerfile` для деплоя на Render.

## Как проверить

Открыть в браузере:

```text
https://kodaktor-week6.onrender.com/login/
https://kodaktor-week6.onrender.com/code/
https://kodaktor-week6.onrender.com/sha1/test/
```

Проверка POST-запроса через терминал:

```bash
curl -X POST https://kodaktor-week6.onrender.com/req/ \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "a=1&b=2"
```

Ожидаемый результат:

- `/login/` возвращает `dieuvina`;
- `/sha1/test/` возвращает `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`;
- `/code/` выводит код обработчика;
- `/req/` возвращает JSON с переданными полями.

## Что показать в видео

1. Открыть репозиторий GitHub с проектом.
2. Показать файлы `index.js`, `app.js`, `Dockerfile`, `package.json`.
3. Открыть Render и показать, что сервис развернут и имеет статус работы.
4. В браузере открыть `/login/` и показать логин `dieuvina`.
5. Открыть `/sha1/test/` и показать SHA1-хеш.
6. Открыть `/code/` и показать, что возвращается код.
7. В терминале выполнить `curl` для `/req/` и показать JSON-ответ.
