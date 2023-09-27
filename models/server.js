const express = require('express');
var cors = require('cors')

class Server{
    
    constructor(){
        this.port = process.env.PORT || 3000;

        this.app = express();
        

        this.routers();


    }
    
    middleware(){
        
        this.app.use(cors())

    }

    routers(){
        this.app.get('/', function (req, res) {
            res.send('Home');
        });

        this.app.use('/noticias', require('../routers/router'));
    }
    
    listen(){
        this.app.listen(this.port, () =>{    
            console.log(`App escuchando en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;