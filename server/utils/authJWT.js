const jwt = require('jsonwebtoken');
const User = require('../models/user');

const Authenticate = async (request, response, next) => {
    try {
        const token = request.cookies.jwtoken;
        const verifyToken = jwt.verify(token, "iAmNotGoodAtCoding");
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});
        if(!rootUser){
            throw new Error("user not found")
        }else{
            request.token = token;
            request.rootUser = rootUser;
            request.userID = rootUser._id;
            next();
        }
        
    } catch (error) {
        response.status(401).send("Unauthorized: No token provided");
        console.log(error);
    }
}
module.exports = Authenticate;