const http = require('http');
const RouteManager = require('./route_manager');

class Server extends RouteManager {

    constructor() {
        super();

    }

    listen(port = 3000, host = "0.0.0.0", cb) {
        const server = http.createServer(this.getCallback());
        server.listen(port, host, undefined, cb);
    }

    getCallback() { return this.executeRouteController; }

}

module.exports = Server;
