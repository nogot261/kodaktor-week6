const express = require('express');
const bodyParser = require('body-parser');
const { createHash } = require('crypto');
const { createReadStream } = require('fs');
const codeHandler = require('./app');

global.createReadStream = createReadStream;

const LOGIN = process.env.LOGIN || 'dieuvina';
const PORT = process.env.PORT || 4321;

const app = express();

app.enable('strict routing');
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
  response.set('Access-Control-Allow-Origin', 'https://kodaktor.ru');
  response.set('Access-Control-Allow-Credentials', 'true');
  response.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.set('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.options('*', (request, response) => {
  response.sendStatus(204);
});

app.get('/login/', (request, response) => {
  response.type('text/plain').send(LOGIN);
});

app.get('/code/', codeHandler);

app.get('/sha1/:input/', (request, response) => {
  const hash = createHash('sha1').update(request.params.input).digest('hex');
  response.type('text/plain').send(hash);
});

app.post('/req/', (request, response) => {
  response.json({
    method: request.method,
    headers: request.headers,
    body: request.body,
    query: request.query
  });
});

app.use((request, response) => {
  response.status(400).type('text/plain').send('Bad request');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
