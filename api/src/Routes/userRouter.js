const {Router} = require('express');
const {
	postUserHandler,
	getUserHandler,
	getUserByEmailHandler,
	postCartItemHandler,
	deleteCartItemHandler,
	putCartItemHandler,
	deleteUser,
	getCart,
} = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.post('/', postUserHandler);

userRouter.get('/', getUserHandler);

userRouter.get('/:email', getUserByEmailHandler);

userRouter.post('/cart/:id', postCartItemHandler);

userRouter.delete('/cart/:userId/:itemId', deleteCartItemHandler);

userRouter.put('/cart/:userId/:cartIndex', putCartItemHandler);

userRouter.delete('/:userId', deleteUser);

userRouter.get('/thecart/:userId', getCart);

module.exports = userRouter;
