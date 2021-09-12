/*
 * @description: 创建服务
 * @Date: 2021-09-05 19:36:44
 */
const http = require('http');
const router = require("./router");
// 用户controller
const server = http.createServer(async (request, response) => {
	// 将HTTP响应200写入response, 同时设置Content-Type: text/html:
	response.writeHead(200, {'Content-Type':'application/json'});
	await router(request, response);
});

server.listen(8080);

