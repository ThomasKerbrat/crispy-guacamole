const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'pug');

// app.use(express.static(path.join(__dirname, '/public')));
app.use(require('./routes'));

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
