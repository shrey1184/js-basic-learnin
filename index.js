const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Twitter route');
});

app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>YouTube Page</h2>');
});
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});