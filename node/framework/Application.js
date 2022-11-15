import http from "node:http";
import { EventEmitter } from "node:events";

class Application {
  constructor () {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
  }

  listen (port, callback) {
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
        const handler = endpoint[method];
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });
  }

  _createServer () {
    return http.createServer((req, res) => {
      const emmitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res); // return true or false
      if (!emmitted) {
        res.end("404 Not Found");
      }
    });
  }

  _getRouteMask (path, method) {
    return `[${path}]:[${method}]`;
  }
}

export default Application