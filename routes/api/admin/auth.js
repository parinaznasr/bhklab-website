// const jwt  = require('jsonwebtoken');

const decodeToken = (token) => {
    let decoded = null;
    try{
        decoded = jwt.verify(token, process.env.TOKEN);
    }catch(error){
        console.log('invalid token');
    }finally{
        return decoded;
    }
}

/**
 * A middleware function used to check token validity
 */
const verifyToken = (req, res, next) => {
    let decoded = decodeToken(req.cookies.cobetoken);
    if(decoded){
        req.decoded = decoded;
        next();
    }else{
        res.send(decoded);
    }
}

/**
 * A middleware function used to check if a user is an admin
 */
const isAdmin = (req, res, next) => {
    if(req.decoded && req.decoded.admin){
        next();
    }else{
        res.send(null);
    }
}

module.exports = {
    decodeToken,
    verifyToken,
    isAdmin
}
