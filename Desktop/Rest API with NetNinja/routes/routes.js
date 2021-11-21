const express = require('express');
const routes = express.Router();
const Ninjas = require('../schema/schema');

// get a list of ninjas from the database
routes.get('/ninjas', (req, res, next) => {
  res.send('just be rest assured your are in the right place young one');
});

// add a new ninja to the database
routes.post('/ninjas', (req, res, next) => {
  Ninjas.create(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch(next);
});

// updae a ninja in the database
routes.put('/ninjas/:id', (req, res, next) => {
  Ninjas.findByIdAndUpdate({ _id: req.params.id }.req.body)
    .then(
      Ninjas.findOne({ _id: req.params.id }).then((result) => {
        res.send(`you have updated the following ${result}`);
      })
    )
    .catch(next);
});

// to remove a ninja from the database
routes.delete('/ninjas/:id', (req, res, next) => {
  Ninjas.findByIdAndRemove({ _id: req.params.id }).then(
    res.send('it is working a bit')
  );
});

module.exports = routes;
