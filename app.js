const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', function (request, response) {
    response.render('index', { title: 'Hey', message: 'Hello World!' });
});

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
