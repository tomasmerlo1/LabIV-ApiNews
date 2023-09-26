const { Router } = require('express')

const { getNoticiasArgentinas, getPalabraClave } = require('../controllers/new')

const rutas = Router();

rutas.get('/noticiasargentinas', getNoticiasArgentinas);
rutas.get('/noticiaspalabraclave/:q', getPalabraClave);




module.exports = rutas;