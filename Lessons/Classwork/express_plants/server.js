const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });

app.listen(port,() => {
    console.log('listening on port' , port);
});