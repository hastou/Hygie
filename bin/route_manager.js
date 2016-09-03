const url = require('url');
const pathToRegexp = require('path-to-regexp');

class Route {

    constructor() {
        this.cache = true;
        this.url = '';
        this.name = '';
        this.controller = () => {};

        this.regex = undefined;
        this.opts = undefined;
    }
}

class RouteManager {
    constructor() {
        this.routes = [];
        this.defaultRoute = undefined;
        this.executeRouteController = this.executeRouteController.bind(this);
    }

    addRoute(url = '/', name = '', controller, opts = []) {
        let newRoute = new Route();
        newRoute.url = url;
        newRoute.controller = controller;
        newRoute.name = name;

        // Permet de gérer les multiples paramètres
        newRoute.regex = pathToRegexp(url, opts);
        newRoute.opts = opts;

        this.routes.push(newRoute);
    }

    addDefaultRoute(controller) {
        this.defaultRoute = controller;
    }

    executeRouteController(req, res) {
        let routeUrl = url.parse(req.url).pathname;
        let hasMatch = false;
        this.routes.forEach((route) => {
            if(route.regex) {
                const urlRegexTest = route.regex.exec(routeUrl);
                // Si non null, la route a matché
                if(urlRegexTest) {
                    if(!req.params)
                        req.params = [];
                    // Ajoute tous les éléments du tableaux de paramètres à req.params
                    Array.prototype.push.apply(req.params, urlRegexTest.slice(1));
                    route.controller(req, res);
                    hasMatch = true;
                }
            }
        });
        if(!hasMatch && this.defaultRoute) {
            this.defaultRoute(req, res);
        }
    }

}

module.exports = RouteManager;
