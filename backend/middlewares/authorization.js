const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    try {
        // Get the token from the request headers
        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json({ "msg": 'Token not provided' });
        }

        // Verify the token and decode its payload
        jwt.verify(token, process.env.secret_key, (err, decoded) => {
            if (err) {
                return res.status(401).json({ "msg": 'Token is invalid or has expired' });
            }
            // If the token is valid, you can access the decoded payload in 'decoded'
            req.user = decoded.userId;
            console.log(req.user)
            next();
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "msg": 'An error occurred during authorization' });
    }
};

module.exports = {
    authorization
};
