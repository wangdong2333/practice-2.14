'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(){
    // const { ctx } = this;
    // ctx.body = '你好, egg';

    const { ctx } = this;
   
    const user = await ctx.service.user.find();
    console.log(user);
    ctx.body = user;

  }
 
}

module.exports = HomeController;
