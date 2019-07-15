'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    
    
    this.ctx.body='新闻页面';

    //渲染views页面  注意await    xxxx
//    await this.ctx.render("news");
  }

  async content() {
    
    //egg.js获取get传值
    var query=this.ctx.query
    console.log(query);

    this.ctx.body='新闻详情';
 
  }

  async newslist() {
    //egg获取动态路由传值

    var params=this.ctx.params;
    console.log(params);
    
    this.ctx.body='新闻列表';
  }
  
}

module.exports = NewsController;
