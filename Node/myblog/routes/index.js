var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");
var Blog=require("../controllers/blog.js");

/* GET home page. */

// function checkLogin(req,res,next){
// 	if(req.session.USER_ID){
// 		next();
// 	}else{
// 		res.redirect("/")
// 	}
// }

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/index",checkLogin);
router.get("/index",Blog.index);

router.get("/reg",User.reg);
router.post("/reg",User.do_reg);

router.post("/checkname",User.checkname);

router.get("/login",User.login);
router.post("/login",User.do_login);
router.get("/unlogin",User.unlogin);

router.get("/add",Blog.add);
router.post("/add",Blog.do_add);

module.exports = router;
