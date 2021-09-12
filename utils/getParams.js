/**
 * 解析接口的参数
 */

const querystring = require("querystring");

/**
 * 解析get接口的参数
 * @param request
 */
const getParams = (request) => {
	return querystring.parse(request.url.split("?")[1]);
};

const postParams = async (request) => {
	let postData = '';
	request.on('data', chunk => {
		postData += chunk;
	});
	return new Promise((resolve) => {
		return request.on('end', () => {
			resolve(JSON.parse(postData));
		});
	});

};

module.exports = {
	getParams,
	postParams
};
