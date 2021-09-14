/**
 * 统一处理返回数据
 */

const CODE = {
	SUCCESS:'200',
	FAILED:'500',
	NO_AUTH:'401',
	NOT_FOUND:'404'
};


const toResponse = (response, result, msg='') => {
	const [err, data] = result;

	response.end(JSON.stringify({
		code:err ? CODE.FAILED : CODE.SUCCESS,
		data,
		msg
	}));
};

module.exports = toResponse;
