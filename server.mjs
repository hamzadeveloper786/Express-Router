import express from 'express';
import path from 'path';
const app = express();
const __dirname =path.resolve();
import authRouter from './routes/auth.mjs'
import feedRouter from './routes/feed.mjs'
import commentRouter from './routes/comment.mjs'
import postRouter from './routes/post.mjs'

app.use(express.json());

let token = "valid";

app.use('/api/v1', authRouter)
app.use((req, res, next) => {
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
});

app.use('/api/v1', postRouter)
app.use('/api/v1', commentRouter)
app.use('/api/v1', feedRouter)

app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})