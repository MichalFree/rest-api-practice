const express = require('express');
const router = express.Router();
const { getAll, getItem, getRandom, postItem, putItem, deleteItem } = require('../controllers/testimonials.controller');


router.get('/testimonials', getAll);

router.get('/testimonials/random', getRandom);

router.get('/testimonials/:id', getItem);

router.post('/testimonials', postItem);

router.put('/testimonials/:id', putItem);

router.delete('/testimonials/:id', deleteItem);

module.exports = router;