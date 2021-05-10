const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';
        
        // Middlewares
        this.middlewares();

        // Reading from body
        this.app.use(express.json());

        // Routes of my app
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // When we use .use() we indicate that it is a middleware
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        })
    }
}

module.exports = Server;