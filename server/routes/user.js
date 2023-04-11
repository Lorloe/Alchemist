const express = require('express');
const router = express.Router();

const {verifyToken, verifyAdmin} = require('../utils/verify');
const {GetUser, GetAllUser, UpdateUserByUser} = require('../controllers/UserController');

router.get("/get-user", verifyToken, GetUser);
router.get("/get-all-user",GetAllUser);
router.post("/update-user-user",verifyToken, UpdateUserByUser);
router.get("/check-admin",verifyAdmin,(req,res)=>{
    res.send(req.user);
})

module.exports = router;