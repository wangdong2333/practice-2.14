'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = '你好, egg';
    console.log(this);
    this.ctx.body='egg给用户相应信息'
  }
  
}

module.exports = AdminController;
