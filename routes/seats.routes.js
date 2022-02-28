const express = require('express');
const router = express.Router();
const { getAll, getItem, postItem, deleteItem } = require('../controllers/seats.controller');

router.get('/seats', getAll);

router.get('/seats/:id', getItem);

router.post('/seats', postItem);

router.delete('/seats/:id', deleteItem);



module.exports = router;