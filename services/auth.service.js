const bcrypt = require("bcrypt");

//IMPLEMENT HASHING
class AuthService{
    generatePasswordHash = (plainTextPassword) => bcrypt.hash(plainTextPassword,10);
}

module.exports = AuthService;