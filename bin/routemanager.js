class Route {
    constructor() {
        this.cache = true;
        this.url = '';
        this.content = '';
        this.name = '';
    }
}

class RouteManager {
    constructor() {
        this.routes = []
    }

    addRoute(url = '/', content = '', name = '') {
        var newRoute = new Route();
        newRoute.url = url;
        newRoute.content = content;
        newRoute.name = name;
        this.routes.push(newRoute);
    }

    getContentForUrl(url) {
        var buffer = 0;
        this.routes.forEach((route) => {
            if (route.url == url) {
                buffer = route.content;
            }
        });
        return buffer;
    }
}

module.exports = new RouteManager();
