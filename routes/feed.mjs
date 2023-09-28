import express from 'express';
const router = express.Router();

router.get('/feed', (req, res, next) => {
    console.log("This is Post Feed api v1", new Date());
    res.send('This is Post Feed api v1' + new Date());
})

export default router;