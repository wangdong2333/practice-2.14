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
router.post("/add",Blog.do_add);

router.get("/blogCatalogs",Blog.Catalog);
router.post("/addBlogCatalog",Blog.addBlogCatalog);

router.get("/update",Blog.update);
router.post("/update",Blog.do_update);

router.get("/del",Blog.del);

//阅读全文
router.get("/viewPost",Blog.all);
//文章管理

router.get("/blogs",Blog.blogs);



module.exports = router;
