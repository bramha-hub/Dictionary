const express = require('express');
const axios = require('axios').default;
const hostname = '127.0.0.1';
const port = 3000;


const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



app.get('/dictionary', (req, res) => {

  console.log(req.params);
  var options = {
    method: 'GET',
    url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
    params: { word : req.query.word },
    headers: {
      'X-RapidAPI-Key': '94aeb0f060msh6e7a81b5cb466cep1e1027jsn99c25af29d13',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });