const express = require('express');
const Route = require('../models/Route');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res)=>{
    Route.find()
    .populate('owner')
    .then(routes=>{
        res.status(200).json(routes);
    })
    .catch(err =>{
        res.json(err);
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Route.findById(id)
    .then(route => {
      res.status(200).json(route);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  console.log('post route');
  const { startpoint, endpoint, kilometre, co2emission, ownerId } = req.body;

  Route.create({
    startpoint, 
    endpoint, 
    kilometre, 
    co2emission,
    owner:ownerId
  })
    .then(route => {
      return Route.findByIdAndUpdate(ownerId, {
        $push: { routes: route._id }
      }).then(() => {
        res.status(201).json({
          message: `Task with id ${route._id} was successfully added to project with id ${ownerId}`
        });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const {startpoint, endpoint, kilometre, co2emission, ownerId  } = req.body;

  Route.findByIdAndUpdate(id, { startpoint, endpoint, kilometre, co2emission, ownerId }, { new: true })
    .then(route => {
      res.json(route);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  Route.findByIdAndDelete(id)
    .then(route => {
      return User.findByIdAndUpdate(route.owner, {
        $pull: { routes: id }
      }).then(() => {
        res.json({ message: 'ok' });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;