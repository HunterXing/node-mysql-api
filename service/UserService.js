const { queryAll, execSql} = require("../conf/db");
const resolveAsync = require("../utils/resolveAsync");
/**
 * 用户的service层
 */

const getUserAllService = async () => {
	const [err, result] = await resolveAsync(queryAll('tb_user', '',['username', 'age']));
	return new Promise((resolve, reject) => {
		if(err) {
			reject(err);
		} else {
			resolve(result);
		}
	});
};


const getUserByIdService = async (id) => {
	let [err, result] = await resolveAsync(queryAll(`tb_user`,`where id = ${id}`, ['username', 'age']));
	return new Promise((resolve, reject) => {
		if(err) {
			reject(err);
		} else {
			result = result.length ? result[0] : {};
			resolve(result);
		}
	});
};

const addUserService = async (user) => {
	let [err, result] = await resolveAsync(
		execSql(`insert into tb_user (username, age) values ("${user.username}", ${user.age})`)
	);
	return new Promise((resolve, reject) => {
		if(err) {
			reject(err);
		} else {
			resolve(result.affectedRows > 0);

		}
	});
};


module.exports = {
	getUserAllService,
	getUserByIdService,
	addUserService
};
