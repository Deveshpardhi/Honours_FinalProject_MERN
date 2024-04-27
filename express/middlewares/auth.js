function auth(req, res, next) {
    req.uid = undefined;
    req.isAuthenticated = false;

    if (req.headers.hasOwnProperty("uid")) {
        // console.log('UID $(req.headers.uid)');
        req.uid = req.headers.uid;
        req.isAuthenticated = true;
    }

    next();
}

module.exports = auth;

