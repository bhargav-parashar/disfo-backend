const router = require("express").Router();
const { postSignUp, postLogin } = require("../controllers/auth.controller");

router.post("/signup",postSignUp);
router.post("/login",postLogin);

module.exports = router;