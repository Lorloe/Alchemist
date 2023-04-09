const express = require('express');
const router = express.Router();

const {verifyToken, verifyAdmin} = require('../utils/verify');
const {Register, Login, Logout} = require('../controllers/AuthController');

router.post("/register", Register);
router.post("/logout", Logout);
router.post("/login", Login);
router.get("/check-admin",verifyAdmin,(req,res)=>{
    res.send(req.user);
})

module.exports = router;