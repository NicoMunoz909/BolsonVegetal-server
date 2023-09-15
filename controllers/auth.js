require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../db/models");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send("Username or password missing");
  const user = await User.findOne({ where: { username } });
  if (user && user.validatePassword(password)) {
    const token = jwt.sign({ username, password }, process.env.TOKEN_SECRET);
    res.send({ msg: "Logged In Succesfully", token });
  } else {
    res.status(400).send("Contraseña incorrecta");
  }
};

module.exports = { login };
