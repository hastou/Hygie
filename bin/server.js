const http = require('http');
const fs = require('fs');
const url = require('url');
const routeManager = require('./routemanager');

const conf = JSON.parse(fs.readFileSync("conf.json"));

routeManager.addRoute('/', 'coucou', 'home');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let content = routeManager.getContentForUrl((url.parse(req.url).pathname));
    if (content == 0) {
        res.statusCode = 404;
        res.write("404 not found");
    } else {
        res.statusCode = 200;
        res.write(content);
    }
    res.end();
});

server.listen(conf['server']['port'], conf['server']['host'], () => {
    console.log("Server running");
});