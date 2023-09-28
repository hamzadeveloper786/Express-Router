import express from 'express';
const router = express.Router();

router.post('/comment', (req, res, next) => {
    console.log("This is comment api v1", new Date());
    res.send('This is comment api v1' + new Date());
})
router.post('/comments', (req, res, next) => {
    console.log("This is comments api v1", new Date());
    res.send('This is comments api v1' + new Date());
})

export default router;