const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    //kiem tra token
    const token = req.cookies.access_ticket;
    
    if(!token)
        return res.status(401).json({success: false, message:"Access Token not found"});
    try {
        //kiem tra
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            return req.userId = decode.userId;
        next();     //cho qua
    } catch (error) {
        console.log(error);
            return res.json(403).json({success: false, message:"Invalid Token"});
    }
};

const verifyAdmin = (req,res,next) => {
    //kiem tra token
    const token = req.cookies.access_ticket;
        if(!token) {
            return res.status(401).json({error:"not authenticated"})     
        }
        jwt.verify(token,process.env.SECRET_KEY,(err,user) => {
            if(err)
                return res.status(403),json({error:"your token is not valid"})
            if(user.isAdmin) {
                req.user = user   
                next();
            } else {
            res.status(403).json({Error:"You don't have access permission"});
        }   
    });
};

module.exports = {verifyToken, verifyAdmin};