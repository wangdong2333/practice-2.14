'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    
    
    this.ctx.body='新闻页面';

    //渲染views页面  注意await    
  
  //  await this.ctx.render("index");
  
  //   await ctx.render('/index', {
  //     name: "egg"
  //   });//index为view文件夹下需要渲染的页面，后面跟的是后台需要传递给前段的参数
    
  }
   
    
  

  async content() {
    
    // http://localhost:7002/content?a=111&blog_id=000


    //egg.js获取get传值  ?a=123
    var blog_id = this.ctx.query.blog_id;
    console.log(blog_id);

    var a=this.ctx.query.a
    console.log(a);

    this.ctx.body='新闻详情';
 
  }

  async newslist() {
    //egg获取动态路由传值  路由配置好了   /123

    var params=this.ctx.params;
    console.log(params);
    
    this.ctx.body='新闻列表';
  }
  
}

module.exports = NewsController;
