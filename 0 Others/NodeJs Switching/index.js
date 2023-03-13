const express = require('express');
const fs = require('fs');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/', async (req, res) => {
    res.send(await fs.readFileSync('index.html', 'utf8'));
});

app.get('/about', async (req, res) => {
    res.send(await fs.readFileSync('about.html', 'utf8'));
});

app.get('/contact', async (req, res) => {
    res.send(await fs.readFileSync('contact-me.html', 'utf8'));
});

app.all('*', async (req, res) => {
    res.status(404).send(await fs.readFileSync('404.html', 'utf8'));
});