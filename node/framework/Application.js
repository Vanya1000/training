import http from "node:http";
import { EventEmitter } from "node:events";

class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
    this.middlewares = [];
  }

  use(middleware) {
    // register middleware
    this.middlewares.push(middleware);
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  // endpoints = {
  //   '/users': {
  //     'GET': handler
  //     }
  //   }

  addRouter(router) {
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          const handler = endpoint[method];
          this.middlewares.forEach((middleware) => {
            middleware(req, res);
          });
          handler(req, res);
        });
      });
    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        if (body) {
          req.body = JSON.parse(body); // todo cut to middleware
        }
        const emmitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res); // return true or false
        if (!emmitted) {
          res.end("404 Not Found");
        }
      });
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
}

export default Application;
