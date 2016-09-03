const server = require('./bin/server');
const routeManager = require('./bin/routemanager');
const Response = require('./bin/response');

routeManager.addRoute('/', 'home', (req, res) => {
    new Response().send(res);
});