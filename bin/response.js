
module.exports = class Response {
    constructor(mime_type="text/plain", code=200, content='default') {
        this.mime_type = mime_type;
        this.code = code;
        this.content = content;
    }
    send(res) {
        res.writeHead(this.code, {'Content-Type': this.mime_type});
        res.end(this.content);
    }
}