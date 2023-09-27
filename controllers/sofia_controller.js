const axios = require('axios');
const { request, response } = require('express')

const key = process.env.API_KEY;

if(key == undefined){
    throw new Error("La api key no puede ser")
}

const getDominio = (req = request, res = response) => {
    console.log(req.params);
    const { domain } = req.params;

    axios.get(`https://newsapi.org/v2/everything?domains=${domain}&apiKey=${key}`)
        .then(({ status, data, statusText }) => {
            // handle success
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
                domain,
            });
        })
        .catch((error) => {
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });

    }
    const getIdioma = (req = request, res = response) => {
        console.log(req.params);
        const { lan, q } = req.params;
        
        axios.get(`https://newsapi.org/v2/everything?q=${q}&apiKey=${key}&language=${lan}`)
            .then(({ status, data, statusText }) => {
                // handle success
                console.log({ status, data, statusText });
                res.status(200).json({
                    lan,
                    q,
                    status,
                    data,
                    statusText,
                    
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
                res.status(400).json({
                    status:400,
                    msg: 'Error inesperado'
                });
            });
    
        }

module.exports = {
    getDominio,
    getIdioma
};