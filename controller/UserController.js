/**
 *  用户controller层
 */
const {getParams, postParams} = require("../utils/getParams");
const {getUserAllService, getUserByIdService, addUserService} = require("../service/UserService");
const toResponse = require("../utils/resolveResponse");
/**
 * 得到所有的用户
 * @param request
 * @param response
 */
const getUserAll = async (request, response) => {
	const result = await getUserAllService();
	toResponse(response, result);
};

/**
 * 根据id获取用户
 * @param request
 * @param response
 */
const getUserById = async (request, response) => {
	const id = getParams(request).id;
	let result = await getUserByIdService(id);
	toResponse(response, result);
};

/**
 * 添加用户
 * @param request
 * @param response
 */
const addUser = async (request, response) => {
	const data = await postParams(request);
	const result = await addUserService(data);
	toResponse(response, result);
};

module.exports = {
	getUserAll,
	getUserById,
	addUser
};

