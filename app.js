const server = require('./bin/server.js');
const routeManager = require('./bin/routemanager');

routeManager.addRoute('/', 'home', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('Hello world!');
});