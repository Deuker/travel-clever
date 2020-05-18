const express = require('express');
const Route = require('../models/Route');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res)=>{
    Route.find({owner: req.user._id})
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
  const startpoint=req.body.startpoint;
  const endpoint=req.body.endpoint;
 const kilometer=req.body.kilometer;
 const co2emission=req.body.co2emission;
  const owner= req.user._id;

  Route.create({
    startpoint, 
    endpoint, 
    kilometer, 
    co2emission,
    owner
  })
    .then(route => {
      return User.findByIdAndUpdate(owner, {
        $push: { routes: route._id }
      }).then(() => {
        res.status(201).json({
          message: `Task with id ${route._id} was successfully added to project with id ${owner}`
        });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const {startpoint, endpoint, kilometer, co2emission, ownerId  } = req.body;

  Route.findByIdAndUpdate(id, { startpoint, endpoint, kilometer, co2emission, ownerId }, { new: true })
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