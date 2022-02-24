const express = require('express');
const router = express.Router();
const {
  getAll,
  getItem,
  postItem,
  putItem,
  deleteItem,
} = require('../controllers/concerts.controller');

router.get('/concerts', getAll);

router.get('/concerts/:id', getItem);

router.post('/concerts', postItem);

router.put('/concerts/:id', putItem);

router.delete('/concerts/:id', deleteItem);

module.exports = router;