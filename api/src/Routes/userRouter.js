const {Router} = require('express');
const {
	postUserHandler,
	getUserHandler,
	getUserByEmailHandler,
	postCartItemHandler,
} = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.post('/', postUserHandler);

userRouter.get('/', getUserHandler);

userRouter.get('/:email', getUserByEmailHandler);

userRouter.post('/cart/:id', postCartItemHandler);

module.exports = userRouter;
