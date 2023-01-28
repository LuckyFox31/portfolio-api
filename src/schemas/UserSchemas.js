// Templates
const {ReplyHeader, InternalServerErrorReplySchema} = require('./TemplateSchemas');

// Schemas
const registerUserSchema = {
	body: {
		type: 'object',
		properties: {
			'firstname': {
				type: 'string',
				maxLength: 50,
			},
			'lastname': {
				type: 'string',
				maxLength: 50,
			},
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
			'firstname',
			'lastname',
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
						'firstname': {
							type: 'string',
						},
						'lastname': {
							type: 'string',
						},
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