const http = require('http');
const fs = require('fs');
const url = require('url');
const routeManager = require('./routemanager');

const conf = JSON.parse(fs.readFileSync("conf.json"));

const server = http.createServer((req, res) => {
    routeManager.executeRouteController(req, res);
});

server.listen(conf['server']['port'], conf['server']['host'], () => {
    console.log(`Server running on ${conf['server']['host']}:${conf['server']['port']}`);
});