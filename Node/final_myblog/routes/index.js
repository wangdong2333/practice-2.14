var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");
var Blog=require("../controllers/blog.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//User
router.get('/reg',User.reg);
router.post("/reg",User.do_reg);

router.post("/checkname",User.checkname);
router.get("/login",User.login);
router.post("/login",User.do_login);

router.get("/unlogin",User.unlogin);//加载Blog.index之后 在退出登录



// Blog
router.get("/index",Blog.index);
router.get("/add",Blog.add);


module.exports = router;
