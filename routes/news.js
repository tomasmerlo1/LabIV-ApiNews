const { Router } = require('express')

const { getNoticias, getNoticiasArgentinas } = require('../controllers/new')

const rutas = Router();

rutas.get('/noticias/:id', getNoticias);

rutas.get('/noticiasArgentinas', getNoticiasArgentinas);




module.exports = rutas;