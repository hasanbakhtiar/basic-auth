
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = function(req,res,next) {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).send('You do not have authority')
    }

    try {
        const decodedToken = jwt.verify(token,process.env.JWT_KEY);
        req.user = decodedToken;
        next();
    } catch (ex) {
        res.status("wrong token");
    }
}