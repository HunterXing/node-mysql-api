/**
 * 优雅处理async/await的返回值
 * @param promise
 * @returns {Promise<unknown>}
 */
const resolveAsync = (promise) => {
	return promise.then(data => {
		return [null, data];
	})
	.catch(err => [err]);
};


module.exports = resolveAsync;
