const http = require('http');
const RouteManager = require('./bin/route_manager');

class Server {

    constructor() {
        this.routeManager = new RouteManager();
    }

    listen(port = 3000, host = "0.0.0.0", cb) {
        const server = http.createServer((req, res) => {
            this.onRequest(req, res);
        });
        server.listen(port, host, undefined, cb);
    }

    onRequest(req, res) {
        this.routeManager.executeRouteController(req, res);
    }

    addRoute(url = '/', name = '', controller) {
        this.routeManager.addRoute(url, name, controller);
    }

}

module.exports = Server;
