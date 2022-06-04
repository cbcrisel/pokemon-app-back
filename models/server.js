const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(require('../routes/pokemon'));
    }
    start(){
        this.app.listen(this.port, () => {
            console.log('Server started on port ' + this.port);
        });
    }
}

module.exports=Server;