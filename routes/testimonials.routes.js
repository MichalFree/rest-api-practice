const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../db');

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/:id').get((req, res) => {
  res.json(db.testimonials.filter((item) => item.id == req.params.id));
});

router.route('/testimonials/random').get((req, res) => {
  let item = db.testimonials[Math.floor(Math.random() * db.length )];
  res.json(item);
});

router.route('/testimonials').post((req, res) => {
  const newData = {
    id: uuidv4(),
    author: req.body.author,
    text: req.body.text,
  };
  db.testimonials.push(newData);
  return res.json({message: 'ok'});
});

router.route('/testimonials/:id').put((req, res) => {
  const editedTestimonials = db.testimonials.filter((item) => item.id == req.params.id);
  const indexOfTestimonial = db.testimonials.indexOf(editedTestimonials);
  const newTestimonials = {
    ...editedTestimonials,
    author: req.body.author,
    text: req.body.text,
  };
  db.testimonials[indexOfTestimonial] = newTestimonials;
  return res.json({message: 'ok'});
});

router.route('/testimonials/:id').delete((req, res) => {
  const deletedTestimonials = db.testimonials.filter((item) => item.id == req.params.id);
  const indexOfTestimonial = db.testimonials.indexOf(deletedTestimonials);
  db.testimonials.splice(indexOfTestimonial, 1);
  return res.json({message: 'ok'});
});

module.exports = router;
