/*'use strict';

const Controller = require('egg').Controller;

class CourseController extends Controller {
  async free() {
    // const { ctx } = this;
    // ctx.body = '你好, egg';
    const { ctx } = this;
    const free_courses = await ctx.service.user.find_free_courses();
    res.json(free_courses);
  };

  async chapter() {
    // const { ctx } = this;
    // ctx.body = '你好, egg';
    const { ctx } = this;
    const chapter = await ctx.service.user.find_chapter(course_id);
    res.json(chapter);    
  }
  
  async consult() {
    
    const { ctx } = this;
    const consult = await ctx.service.user.find_consult();
    res.json(consult);    
  }
   
  async comment() {
    
    const { ctx } = this;
    const comment = await ctx.service.user.find_comment();
    // res.json(comment);    
  }
  
  async update() {
    
    const { ctx } = this;
    const update = await ctx.service.user.find_update();
    // res.json(update);    
  }

  // async teacher() {
    
  //   const { ctx } = this;
  //   const teacher = await ctx.service.user.find_teacher(course_id);
  //   res.json(teacher);    
  // }

}

module.exports = CourseController;
*/
