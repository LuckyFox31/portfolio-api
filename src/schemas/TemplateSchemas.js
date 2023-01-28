const ReplyHeader = {
	status: {
		type: 'number',
	},
	message: {
		type: 'string',
	}
}

const InternalServerErrorReplySchema = {
	500: {
		type: 'object',
		properties: {
			status: {
				type: 'number',
			},
			message: {
				type: 'string',
			}
		}
	},
}

module.exports = {
	InternalServerErrorReplySchema,
	ReplyHeader
}