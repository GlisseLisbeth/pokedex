const express = require('express');
const bodyParser = require('body-parser');
const levelup = require('levelup');

const app = express();
const db = levelup('./data', {valueEncoding: 'json'});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const router = express.Router();

router.get('/pokedex', (req, res) => {
  let pokedex= [];
  db.createValueStream().on('data', (data) => {
    pokedex.push(data);
  }).on('end', _ => {
    res.json(pokedex);
  });
});

app.use('http://pokeapi.co/api/v2/pokedex/1/', router);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log("El server esta corriendo en el"+port+"!");
});