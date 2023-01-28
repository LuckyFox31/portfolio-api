module.exports = function errorHandler(reply, status, message) {
	return reply
		.code(status)
		.send({
			status: status,
			message: message
		});
}