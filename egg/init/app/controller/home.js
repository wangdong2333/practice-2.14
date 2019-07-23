'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(){
  
    const { ctx } = this;
    const blogs = await ctx.service.user.find_blog();
    console.log(blogs);
    if(blogs.length>0)  {

      this.ctx.body ={
          code:0,
          data:blogs,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }
  }

  };

  async tag(){
    const { ctx } = this;
    const tags = await ctx.service.user.find_tag();
    console.log(tags);
    if(tags.length>0)  {

      this.ctx.body ={
          code:0,
          data:tags,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }
  }
    
  };

  async course(){
    const { ctx } = this;
    const courses = await ctx.service.user.find_course();
    console.log(courses);
    if(courses.length>0)  {

      this.ctx.body ={
          code:0,
          data:courses,
          msg:'成功',
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }
  }
  
    
  }

  async user(){
    var user_id = this.ctx.query.user_id;
    const { ctx } = this;
    const users = await ctx.service.user.find_user(user_id);
    console.log(users);
    if(users.length>0)  {

      this.ctx.body ={
          code:0,
          data:users,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }
  }
  };

  async add_user(){
    const { ctx } = this;
    const add_user = await ctx.service.user.add_user();
    console.log(add_user);
    if(add_user.affectedRows>0)  {

      this.ctx.body ={
          code:0,
          data:add_user,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }
  }
  };
  

}

module.exports = HomeController;
