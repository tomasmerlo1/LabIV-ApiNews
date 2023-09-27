const axios = require('axios');
const { request, response } = require('express')

const key = process.env.API_KEY;

if(key == undefined){
    throw new Error("La api key no puede ser")
}

const getComerciales = (req = request, res = response) => {
    console.log(req.params);
    const {cate} = req.params; 

    axios.get (`https://newsapi.org/v2/top-headlines/sources?category=${cate}apiKey=${key}`)
        .then(({ status, data, statusText }) => {
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
                cate,
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
    const getNoticiasBBC_News = (req = request, res = response) => {
        console.log(req.params);
        const {source} = req.params;

        axios.get (`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`)
            .then(({ status, data, statusText }) => {
                console.log({ status, data, statusText });
                res.status(200).json({
                    status,
                    data,
                    statusText,
                    source,
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
    getComerciales,
    getNoticiasBBC_News
};

