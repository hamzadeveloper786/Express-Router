import express from 'express';

let router = express.Router;

import authRouter from './routes/auth.mjs'
import feedRouter from './routes/feed.mjs'
import commentRouter from './routes/comment.mjs'
import postRouter from './routes/post.mjs'
router.use(authRouter)
router.use(postRouter)
router.use(commentRouter)
router.use(feedRouter)

export default router;