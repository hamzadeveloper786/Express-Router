import express from 'express';
const router = express.Router();

router.post('/post', (req, res, next) => {
    console.log("This is post api v1", new Date());
    res.send('This is post api v1' + new Date());
})
router.post('/posted', (req, res, next) => {
    console.log("This is posted api v1", new Date());
    res.send('This is posted api v1' + new Date());
})

export default router;