require('dotenv').config();
// middleware
module.exports= accesstoken = async (req, res, next) => {
    try {
        const token = process.env.ACCESS_TOKEN;
        const incomingToken = req.headers[process.env.ACCESS_HEADER];

        if (!Object.keys(req.headers).includes(process.env.ACCESS_HEADER)) {
            return res.status(401).send("no access!");
        }

        if (!incomingToken) {
            return res.status(401).send("no access!");
        }

        if (incomingToken !== token) {
            return res.status(401).send("no access!");
        }

        next()
    } catch (error) {
        console.log(error)
    }
}
