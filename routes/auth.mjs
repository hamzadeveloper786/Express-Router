import express from 'express';
const router = express.Router();

router.post('/login', (req, res, next) => {
    console.log("This is Login api v1", new Date());
    res.send('This is Login api v1' + new Date());
})
router.post('/signup', (req, res, next) => {
    console.log("This is Signup api v1", new Date());
    res.send('This is Signup api v1' + new Date());
})

export default router;