const express = require('express');
const Twig = require('twig');

const app = express();

app.get('/', (req, res) => {
  res.render('index.twig', { message: 'Hello world' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});