import Router from "../framework/Router.js";


const router = new Router();

const users = [
	{ name: "Vanya", age: 25 },
	{ name: "Vova", age: 26 },
	{ name: "Vasya", age: 27 }, // use uuid
];

router.get("/users", (req, res) => {
	console.log('handler');
	res.sendMy(users);
});

router.post("/users", (req, res) => {
	console.log('user router',req.body);
	// users.push(req.body);
	res.sendMy(users);
});

export default router;