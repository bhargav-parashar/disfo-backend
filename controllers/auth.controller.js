const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();
const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();

const postSignUp = async (req, res) => {
  const { fullName, email, username, password } = req.body;

  try {
    const passwordHash = await AuthServiceInstance.generatePasswordHash(
      req.body.password
    );

    const newUser = await UserServiceInstance.register({
      ...req.body,
      password: passwordHash,
    });

    res.status(201).send(newUser);
    
  } catch (err) {
    res.status(500).send({ message: "Something went wrong", err });
  }
};

const postLogin = (req, res) => {};

module.exports = { postSignUp, postLogin };
