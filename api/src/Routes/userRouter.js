const {Router} = require('express');
const {
	postUserHandler,
	getUserHandler,
	getUserByEmailHandler,
} = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.post('/', postUserHandler);

userRouter.get('/', getUserHandler);

userRouter.get('/:email', getUserByEmailHandler);

module.exports = userRouter;
