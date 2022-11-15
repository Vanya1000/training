import Router from "../framework/Router.js";


const router = new Router();

const users = [
	{ name: "Vanya", age: 25 },
	{ name: "Vova", age: 26 },
	{ name: "Vasya", age: 27 },
];

router.get("/users", (req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(
		JSON.stringify(users)
	);
});

router.post("/users", (req, res) => {
	req.on("data", (data) => {
		console.log(data);
	});
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(
		JSON.stringify(users)
	);
});

export default router;