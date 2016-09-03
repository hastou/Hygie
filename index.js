/**
 * Created by Thibault on 03/09/2016.
 */

import koa from 'koa';
import _ from 'koa-route';



export default () => {
    const application = new Application();

    return application;
}


class Application {
    constructor() {
        this.app = koa();
    }

    use() {

    }

    get(route, cb) {
        _.get(route, cb);
    }

    post(route, cb) {
        _.post(route, cb);
    }

    listen(port = 3000) {
        this.app.listen(port);
    }

}





