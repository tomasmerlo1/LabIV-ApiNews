const axios = require('axios');
const { request, response } = require('express')

const key = process.env.API_KEY;

const getNoticiasArgentinas = (req = request, res = response) => {
    console.log(req.params);
    const { name } = req.params;

    axios.get(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=${key}`)
        .then(({ status, data, statusText }) => {
            
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
                name
            });
        })
        .catch((error) => {
            
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });


}

const getPalabraClave = (req = request, res = response) => {
    console.log(req.params);
    const { q } = req.params;

    axios.get(`https://newsapi.org/v2/everything?apiKey=${key}&q=${q}`)
        .then(({ status, data, statusText }) => {
            
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
                q,
            });
        })
        .catch((error) => {
            
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });

}

module.exports = {
    getNoticiasArgentinas, 
    getPalabraClave

};