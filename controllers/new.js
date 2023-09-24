const axios = require('axios');
const { request, response } = require('express')

const key = 'bc1faf88178f4e458017474fed0bd5bb';

const getNoticias = (req = request, res = response) => {
    const {id} = req.params;
    console.log(id)
    res.status(200).json({name: `Noticia numero:${id}`});
}

const getNoticiasArgentinas = (req = request, res = response) => {
    console.log(req.params);
    const { name } = req.params;



axios.get(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=${key}`)
    .then(({ status, data, statusText }) => {
        // handle success
        console.log({ status, data, statusText });
        res.status(200).json({
            status,
            data,
            statusText,
            name
        });
    })
    .catch((error)=>{
        // handle error
        console.log(error);
        res.status(400).json({
            status:400,
            msg: 'Error inesperado'
        });
    });


}

module.exports = {
    getNoticias,
    getNoticiasArgentinas
};