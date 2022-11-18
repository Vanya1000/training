const users = [
	{ id: 1, name: "Vanya", age: 25 },
	{ id: 2, name: "Vova", age: 26 },
	{ id: 3, name: "Vasya", age: 27 }, // use uuid
];

const getUsers = (req, res) => {
	if (req.params.id) {
		const user = users.find((user) => user.id === Number(req.params.id));
		if (user) {
			res.sendMy(user);
		} else {
			res.end("404 Not Found");
		}
	} else{
		res.sendMy(users);
	}
}

const createUser = (req, res) => {
	users.push({ ...req.body, id: users.at(-1).id + 1 });
	res.sendMy(users);
}

export { getUsers, createUser }; 