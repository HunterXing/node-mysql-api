const { getUserAll, getUserById, addUser } = require("./controller/UserController");


const router = async (request, response) => {
	const matchUrl = (method, url, getHasParams) => {
		if(getHasParams) {
			return request.method === method && request.url.indexOf(url) > -1;
		}
		return request.method === method && request.url === url;
	};

	if(matchUrl('GET', '/userList')) {
        await getUserAll(request, response);
	}

	if(matchUrl('GET', '/user?', true)) {
		await getUserById(request, response);
	}

	if(matchUrl('POST', '/user')) {
		await addUser(request, response);
	}
};

module.exports = router;
