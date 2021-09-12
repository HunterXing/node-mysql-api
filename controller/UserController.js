/**
 *  用户controller层
 */
const {getParams, postParams} = require("../utils/getParams");
const {getUserAllService, getUserByIdService, addUserService} = require("../service/UserService");
/**
 * 得到所有的用户
 * @param request
 * @param response
 */
const getUserAll = async (request, response) => {
	const res = await getUserAllService();
	response.end(JSON.stringify({
		code:200,
		data:res
	}));
};

/**
 * 根据id获取用户
 * @param request
 * @param response
 */
const getUserById = async (request, response) => {
	const id = getParams(request).id;
	let result = await getUserByIdService(id);
	// 将HTTP响应的HTML内容写入response:
	response.end(JSON.stringify({
		code:200,
		data:result
	}));
};

/**
 * 添加用户
 * @param request
 * @param response
 */
const addUser = async (request, response) => {
	const data = await postParams(request);
	const result = await addUserService(data);
	// // 将HTTP响应的HTML内容写入response:
	response.end(JSON.stringify({
		code:200,
		data:result ? '添加成功' : '添加失败'
	}));
};

module.exports = {
	getUserAll,
	getUserById,
	addUser
};

