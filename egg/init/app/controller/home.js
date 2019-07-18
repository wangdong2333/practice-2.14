'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(){
  
    const { ctx } = this;
    const blogs = await ctx.service.user.find_blog();
    console.log(blogs);
    ctx.body = blogs;

  };

  async tag(){
    const { ctx } = this;
    const tags = await ctx.service.user.find_tag();
    // console.log(tags,'123');
    
  };

  async course(){
    const { ctx } = this;
    const courses = await ctx.service.user.find_course();
    // console.log(tags,'123');
    
  }
 
}

module.exports = HomeController;



// 'http://localhost/home/index?a'    'get/post'