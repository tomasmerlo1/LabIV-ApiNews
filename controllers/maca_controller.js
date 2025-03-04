const axios = require('axios');
const { request, response } = require('express')

const key = process.env.API_KEY;

if(key == undefined){
    throw new Error("La api key no puede ser")
}

const getComerciales = (req = request, res = response) => {
    console.log(req.params);
    const {categoria} = req.params; 

    axios.get (`https://newsapi.org/v2/top-headlines/sources?category=${categoria}&apiKey=${key}`)
        .then(({ status, data, statusText }) => {
            console.log({ status, data, statusText });
            const { title, description, url, urlToImage, publishedAt, content,author } = noticia;
                return {
                    title,
                    description,
                    url,
                    image: urlToImage,
                    published_at: publishedAt,
                    content,
                    author,
                    source: noticia.source.name
                }
        } )
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

