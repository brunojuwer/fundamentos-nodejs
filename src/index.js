const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json([{
    message: 'ohayo gozaimasu'
  }])
})

app.listen('3333', console.log('Server on http://localhost:3333') )