require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../db/models");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send("Username or password missing");
  try {
    console.log("Try statement beggining");
    const user = await User.findOne({ where: { username } });
    console.log("Try statement after sequelize call");
    if (user && user.validatePassword(password)) {
      console.log("Try statement inside password validation");
      const token = jwt.sign({ username, password }, process.env.TOKEN_SECRET);
      console.log("Try statement after jwt sign");
      res.send({ msg: "Logged In Succesfully", token });
    } else {
      res.status(400).send("Contraseña incorrecta");
    }
  } catch (error) {
    res.status(400).send("ACAAAAAAAAAA");
  }
};

module.exports = { login };
