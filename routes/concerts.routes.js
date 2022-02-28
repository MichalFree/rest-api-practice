const express = require('express');
const router = express.Router();
const {
  getAll,
  getItem,
  postItem,
  putItem,
  deleteItem,
  getPerformer,
  getGenre,
  getPrice,
  getbyDay,
} = require('../controllers/concerts.controller');

router.get('/concerts', getAll);

router.get('/concerts/:id', getItem);

router.post('/concerts', postItem);

router.put('/concerts/:id', putItem);

router.delete('/concerts/:id', deleteItem);

router.get('/concerts/performer/:performer', getPerformer);

router.get('/concerts/genre/:genre', getGenre);

router.get('/concerts/price/:price_min/:price_max', getPrice);

router.get('/concerts/price/day/:day', getbyDay);

module.exports = router;