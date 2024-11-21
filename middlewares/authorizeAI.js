const authorizeAI = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log({ headers: req.headers, token });
  console.log({ env: process.env.AI_API_KEY });
  if (token === process.env.AI_API_KEY) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};

module.exports = { authorizeAI };
