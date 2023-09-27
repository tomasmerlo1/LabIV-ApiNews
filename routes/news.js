const { Router } = require('express')

const { getNoticiasArgentinas  } = require('../controllers/new')

const rutas = Router();

rutas.get('/argentinas', getNoticiasArgentinas);





module.exports = rutas;