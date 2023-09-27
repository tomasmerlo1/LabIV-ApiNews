const { Router } = require('express')
const { getDominio, getIdioma } = require("../controllers/sofia_controller")
const {getNoticiasArgentinas, getPalabraClave} = require("../controllers/tomas_controller")
const {getNoticiasBBC_News, getComerciales} = require("../controllers/maca_controller")
//const macaController = require("../controllers/maca").default


//const { getNoticiasArgentinas, getPalabraClave, getDominio  } = require('../controllers/sofia')

const rutas = Router();

rutas.get('/argentinas', getNoticiasArgentinas);
rutas.get('/palabraclave/:q', getPalabraClave);
rutas.get('/domains/:domain', getDominio);
rutas.get('/palabraclave/:q/:lan', getIdioma);
rutas.get('/categoria/:categoria', getComerciales);
rutas.get('/source/:source', getNoticiasBBC_News);


module.exports = rutas;