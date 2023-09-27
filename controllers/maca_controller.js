const axios = require('axios');
const { request, response } = require('express')

const key = process.env.API_KEY;

if(key == undefined){
    throw new Error("La api key no puede ser")
}
