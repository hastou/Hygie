url = require('url');

class Route {
    constructor() {
        this.cache = true;
        this.url = '';
        this.name = '';
        this.controller = () => {};
    }
}

class RouteManager {
    constructor() {
        this.routes = []
    }

    addRoute(url = '/', name = '', controller) {
        var newRoute = new Route();
        newRoute.url = url;
        newRoute.controller = controller;
        newRoute.name = name;
        this.routes.push(newRoute);
    }

    executeRouteController(req, res) {
        var buffer = 0;
        var routeUrl = url.parse(req.url).pathname;
        this.routes.forEach((route) => {
            if (route.url == routeUrl) {
                route.controller(req, res);
            }
        });
    }
}

routeManager = new RouteManager();
module.exports = routeManager;
