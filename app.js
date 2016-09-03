const Server = require('./bin/server.js');
const fs = require('fs');

const conf = JSON.parse(fs.readFileSync("conf.json"));

let server = new Server();

server.addRoute('/', 'home', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('Hello world!');
});


server.listen(conf.server.port, conf.server.host,
    () => console.log(`Server lancé sur le port ${conf.server.port}`));
