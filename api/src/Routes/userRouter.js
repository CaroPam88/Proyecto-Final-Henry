const {Router} = require('express');
const {
	postUserHandler,
	getUserHandler,
	getUserByEmailHandler,
	postCartItemHandler,
	deleteCartItemHandler,
	putCartItemHandler,
	deleteUser,
} = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.post('/', postUserHandler);

userRouter.get('/', getUserHandler);

userRouter.get('/:email', getUserByEmailHandler);

userRouter.post('/cart/:id', postCartItemHandler);

userRouter.delete('/cart/:userId/:itemId', deleteCartItemHandler);

userRouter.put('/cart/:userId/:cartIndex', putCartItemHandler);

userRouter.delete('/:userId', deleteUser);

module.exports = userRouter;
