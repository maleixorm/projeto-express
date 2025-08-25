const express = require('express');
const app = express();
const path = require('path');
const users = require('./users');
const port = 5000;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// Arquivos estáticos
app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});