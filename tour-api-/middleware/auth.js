function auth(req, res, next) {

  const admin = req.query.admin; 

  if (admin === "true") {
    // allow access
    next();
  } else {
    // block access
    res.status(401).send("Not Authorized");
  }
}

module.exports = auth;