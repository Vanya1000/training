import http from 'node:http';

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	})
	if (req.url === '/users') {
		res.end(JSON.stringify({ users: [
			{ name: 'Vanya', age: 25 },
			{ name: 'Vova', age: 26 },
			{ name: 'Vasya', age: 27 },
		] }));
	} else if (req.url === '/home') {
    res.end('<h1>Home</h1>');
	}
})