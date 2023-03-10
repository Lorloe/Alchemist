const express = require('express');
const router = express.Router();

const {verifyToken, verifyAdmin} = require('../utils/verify');
const {Register, Login, Logout, GetUser, UpdateUser, UpdateUserByUser} = require('../controllers/UserController');

router.post("/register", Register);
router.post("/logout", Logout);
router.post("/login", Login);
router.get("/get-user", GetUser);
router.post("/update-user-admin", UpdateUser);
router.post("/update-user-user", UpdateUserByUser);

router.get("/check-admin",verifyAdmin,(req,res)=>{
    res.send(req.user);
})

module.exports = router;