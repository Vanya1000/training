class Router {
	constructor() {
		this.endpoints = {}
	}

  // endpoints = {
  //   '/users': {
  //     'GET': handler
  //     }
  //   }

	request(method = 'GET', path = '', handler) {
		if (!this.endpoints[path]) {
			this.endpoints[path] = {}
		}
		const endpoint = this.endpoints[path]
		if (endpoint[method]) {
			throw new Error(`Endpoint ${method} ${path} already exists`)
		}
		endpoint[method] = handler
		
	}

	get(path, handler) {
		this.request('GET', path, handler)
	}

	post(path, handler) {
		this.request('POST', path, handler)
	}

	put(path, handler) {
		this.request('PUT', path, handler)
	}

	returnState() {
		return this.endpoints
	}
}

export default Router