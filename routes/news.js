const { Router } = require('express')

const { getNoticiasArgentinas, getPalabraClave  } = require('../controllers/new')

const rutas = Router();

rutas.get('/argentinas', getNoticiasArgentinas);
rutas.get('/palabraclave:q', getPalabraClave);





module.exports = rutas;