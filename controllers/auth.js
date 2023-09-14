require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../db/models");

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (user.validatePassword(password)) {
    const token = jwt.sign({ username, password }, process.env.TOKEN_SECRET);
    res.send(token);
  } else {
    res.send("Contraseña incorrecta");
  }
};

module.exports = { login };
