const express = require('express');
const router = express.Router();

const {verifyToken, verifyAdmin} = require('../utils/verify');
const {Register, Login, Logout, GetUser, UpdateUser} = require('../controllers/UserController');

router.post("/register",Register);
router.post("/logout",Logout);
router.post("/login",Login);
router.get("/get-user",GetUser);
router.post("/update-user",UpdateUser);

router.get("/check-admin",verifyAdmin,(req,res)=>{
    res.send(req.user);
})

module.exports = router;