'use strict';

const Controller = require('egg').Controller;

class CourseController extends Controller {
  async free() {
    // const { ctx } = this;
    // ctx.body = '你好, egg';
    const { ctx } = this;
    const free_courses = await ctx.service.user.find_free_courses();
    console.log(free_courses);
    if(free_courses.length>0)  {

      this.ctx.body ={
          code:0,
          data:free_courses,
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

  async course_one() {
    var course_id = this.ctx.query.course_id;
    
    const { ctx } = this;
    const course_one = await ctx.service.user.find_course_one(course_id);
    console.log(course_one);
    if(course_one.length>0)  {

      this.ctx.body ={
          code:0,
          data:course_one,
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

  async chapter(res,req) {
    var course_id = this.ctx.query.course_id;

    const { ctx } = this;
    const chapter = await ctx.service.user.find_chapter(course_id);
    // res.json(chapter);    
    console.log(chapter);
    if(chapter.length>0)  {

      this.ctx.body ={
          code:0,
          data:chapter,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }

  }
  }
  
  async consult(res,req) {
    
    const { ctx } = this;
    const consult = await ctx.service.user.find_consult();
    // res.json(consult);  
    console.log(consult);
    if(consult.length>0)  {

      this.ctx.body ={
          code:0,
          data:consult,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }

  }
  }
   
  async comment() {
    
    const { ctx } = this;
    const comment = await ctx.service.user.find_comment();
    // res.json(comment);    
    console.log(comment);
    if(comment.length>0)  {

      this.ctx.body ={
          code:0,
          data:comment,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }

  }
  }
  
  async update() {
    
    const { ctx } = this;
    const update = await ctx.service.user.find_update();
    console.log(update);
    if(update.length>0)  {

      this.ctx.body ={
          code:0,
          data:update,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }

    }
  }

  async teacher() {
    var course_id = this.ctx.query.course_id;
    const { ctx } = this;
    const teacher = await ctx.service.user.find_teacher(course_id);
    console.log(teacher); 
    if(teacher.length>0)  {

      this.ctx.body ={
          code:0,
          data:teacher,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }

    }   
  }

  async course_infor() {
    var course_id = this.ctx.query.course_id;
    
    const { ctx } = this;
    const course_infor = await ctx.service.user.find_course_infor(course_id);
    console.log(course_infor); 
    if(course_infor.length>0)  {

      this.ctx.body ={
          code:0,
          data:course_infor,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }

    }   
  }

  async course_com() {
    var course_id = this.ctx.query.course_id;
    
    const { ctx } = this;
    const course_com = await ctx.service.user.find_course_com(course_id);
    console.log(course_com);
    if(course_com.length>0)  {

      this.ctx.body ={
          code:0,
          data:course_com,
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

  async course_type() {
    // var course_id = this.ctx.query(course_id);
    
    const { ctx } = this;
    const course_type = await ctx.service.user.find_course_type();
    console.log(course_type);
    if(course_type.length>0)  {

      this.ctx.body ={
          code:0,
          data:course_type,
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

  async my_free_course() {
    var user_id = this.ctx.query.user_id;
    
    const { ctx } = this;
    const my_free_course = await ctx.service.user.find_my_free_course(user_id);
    console.log(my_free_course);
    if(my_free_course.length>0)  {

      this.ctx.body ={
          code:0,
          data:my_free_course,
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

  async my_pay_course() {
    var user_id = this.ctx.query.user_id;
    
    const { ctx } = this;
    const my_pay_course = await ctx.service.user.find_my_pay_course(user_id);
    console.log(my_pay_course);
    if(my_pay_course.length>0)  {

      this.ctx.body ={
          code:0,
          data:my_pay_course,
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
  async my_job_course() {
    var user_id = this.ctx.query.user_id;
    
    const { ctx } = this;
    const my_job_course = await ctx.service.user.find_my_pay_course(user_id);
    console.log(my_job_course);
    if(my_job_course.length>0)  {

      this.ctx.body ={
          code:0,
          data:my_job_course,
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

  async stage() {
    
    const { ctx } = this;
    const stage = await ctx.service.user.find_stage();
    console.log(stage);
    if(stage.length>0)  {

      this.ctx.body ={
          code:0,
          data:stage,
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
  async add_consult(){
   
    const { ctx } = this;
    const add_consult = await ctx.service.user.add_consult();
    console.log(add_consult);
    if(add_consult.affectedRows>0)  {

      this.ctx.body ={
          code:0,
          data:add_consult,
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

  async update_study(){
    var course_id = this.ctx.query.course_id;
  
    const { ctx } = this;
    const update_study = await ctx.service.user.update_study(course_id);
    console.log(update_study);
    if(update_study.affectedRows>0)  {
      this.ctx.body ={
          code:0,
          data:update_study,
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

  async course_exercise(){
    var course_id = this.ctx.query.course_id;
  
    const { ctx } = this;
    const course_exercise = await ctx.service.user.find_course_exercise(1);
    console.log(course_exercise);
    if(course_exercise.length>0)  {
      this.ctx.body ={
          code:0,
          data:course_exercise,
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

module.exports = CourseController;
