const Server = require('./bin/server');
const Response = require('./bin/response');
const fs = require('fs');

const server = new Server();
const conf = JSON.parse(fs.readFileSync("conf.json"));

server.addRoute('/', 'home', (req, res) => {
    new Response().send(res);
});

server.addRoute('/html', 'html', (req, res) => {
    new Response.Html().send(res);
});

server.addRoute('/:test/truc', 'test', (req, res) => {
    new Response.Json(200, JSON.stringify(req.params)).send(res);
});

server.addDefaultRoute((req, res) => {
   new Response.Json(404, JSON.stringify({test: "Erreur"})).send(res);
});

server.listen(conf.server.port, conf.server.host,
    () => console.log(`Server running on ${conf.server.host}:${conf.server.port}`));

