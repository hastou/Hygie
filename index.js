/**
 * Created by Thibault on 03/09/2016.
 */

import koa from 'koa';
import koa_route from 'koa-route';



export default () => {
    const application = new Application();

    return application;
}


class Application {

    constructor() {
        this.app = koa();
    }

    get koa() { return koa; }
    use(cb) { this.app.use(cb); }
    get(route, cb) { koa_route.get(route, cb); }
    post(route, cb) { koa_route.post(route, cb); }
    listen(port = 3000) { this.app.listen(port); }

}





