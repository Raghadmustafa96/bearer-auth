'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./models/users.js');
const basicAuth = require('./middleware/basic.js');
const bearerAuth = require('./middleware/bearer.js');

authRouter.post('/signup', async (req, res, next) => {
	try {
		let user = new User(req.body);
		const userRecord = await user.save();
		const output = {
			user: userRecord,
			token: userRecord.token,
		};
		res.status(201).json(output);
	} catch (e) {
		res.status(403).json({ error: e.message });
	}
});


authRouter.post('/signin', basicAuth, (request, res, next) => {
	try {
		const user = {
			user: request.user,
			token: request.user.token,
		};
		res.status(200).json(user);
	} catch (error) {
		res.status(403).json({ error: e.message });
	}
});

authRouter.get('/users', bearerAuth, async (req, res, next) => {
	try {
		const users = await User.find({});
		const list = users.map((user) => user.username);
		console.log(list);
		res.status(200).json(list);
	} catch (error) {
		res.status(403).json({ error: e.message });
	}
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
	res.status(200).send('Welcome to the secret area!');
});

module.exports = authRouter;