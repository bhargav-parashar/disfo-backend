const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

const postSignUp = async (req,res) =>{
    try{
        res.status(201).send(await UserServiceInstance.register(req.body));     
    }catch(err){
        res.status(500).send({message:"Something went wrong",err})
    }
};

const postLogin = (req,res) =>{};

module.exports = { postSignUp, postLogin };