class Response {
    constructor(mime_type = "text/plain", code = 200, content = 'default') {
        this.mime_type = mime_type;
        this.code = code;
        this.content = content;
    }

    send(res) {
        res.writeHead(this.code, {'Content-Type': this.mime_type});
        res.end(this.content);
    }
}

class HtmlResponse extends Response {
    constructor(content = '<h1>default</h1>') {
        super("text/html", 200, content);
    }
}

exports.Simple = Response;
exports.Html = HtmlResponse;

