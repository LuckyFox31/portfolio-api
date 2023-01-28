// Templates
const {ReplyHeader, InternalServerErrorReplySchema} = require('./TemplateSchemas');

// Schemas
const registerUserSchema = {
	body: {
		type: 'object',
		properties: {
			'email': {
				type: 'string',
				format: 'email',
				minLength: 6,
				maxLength: 255,
			},
			'password': {
				type: 'string',
				minLength: 7,
				maxLength: 50,
			}
		},
		required: [
			'email',
			'password'
		]
	},
	response: {
		201: {
			type: 'object',
			properties: {
				...ReplyHeader,
				user: {
					type: 'object',
					properties: {
						'email': {
							type: 'string',
						},
					}
				},
				accessToken: {
					type: 'string'
				},
			}
		},
		409: {
			type: 'object',
			properties: {
				...ReplyHeader
			}
		},
		...InternalServerErrorReplySchema
	}
}