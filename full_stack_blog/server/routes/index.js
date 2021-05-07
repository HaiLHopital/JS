const { Router } = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const commentRouter = require('./commentRouter');
const postRouter = require('./postRouter');

router.use('/user', userRouter);
router.use('/comments', commentRouter);
router.use('/posts', postRouter);

module.exports = router;
