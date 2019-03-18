const User = require('../models/User');
const Kudos = require('../models/Kudos');

module.exports = function (app) {

  //Get requests

  app.get('/api/kudos', (req, res) => {
    Kudos.find({})
    .populate('sender', 'name')
    .populate('receiver', 'name')
    .then(kudos =>{
      res.json(kudos)
    })
    .catch(err => {
      res.json({
        err: err
      })
    });
  })

  app.get('/api/user', (req, res) => {
    User.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json({
        err: err
      })
    })
  })

  // Post requests

  app.post('/api/kudos', (req, res) => {
    Kudos.create(req.body)
    .then(kudos => {
      res.json(kudos);
    })
    .catch((err) => {
      res.json({
        err: err
      })
    })
  })

  //Secret api route to create a user.
  app.post('/api/user', (req, res) => {
    User.create(req.body)
    .then(kudos => {
      res.json(kudos);
    })
    .catch((err) => {
      res.json({
        err: err
      })
    })
  })

  //Secret api route to update a user.
  app.put('/api/user/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json({
        err: err
      })
    })
  })

}