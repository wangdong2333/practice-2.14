'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find_blog() {
    
    // const user = await this.app.mysql.select('user');
    //比如查询users表name=Jack的数据
    // let uid = 1;
    // this.app.mysql.query('select * from users where name = ?', [name]);
    // const user = await app.mysql.query('select * from user where uid = ?',[uid]);
    // console.log(this.app,"12345");
    // const user = await this.app.mysql.insert('user',{uname:'xiaosan',pass:'12345'});
    // let list=['111','222','333'];

    var sql="select * from t_blog";
    let slist =  await this.app.mysql.query(sql);
    console.log(slist);

    // return  list;
    
  };

  async find_tag(){
    var sql="select * from t_tag";
    let tag_list=await this.app.mysql.query(sql);
    console.log(tag_list);
  };

  async find_course(){
    var sql="select * from t_course";
    let course_list=await this.app.mysql.query(sql);
    console.log(course_list);
  };

  async find_free_courses(){
    var sql="select * from t_course where price = 0";
    
    let course_list=await this.app.mysql.query(sql);
    console.log(course_list);
  };

  async find_chapter(course_id){
	  var sql="select * from t_course,t_chapter,t_section where t_course.course_id=t_chapter.course_id and t_chapter.chap_id=t_section.chap_id and t_course.course_id=?";

    let chapter_list=await this.app.mysql.query(sql,[course_id]);
    console.log(chapter_list);
  };

  async find_consult(){
    var sql="select * from t_consult";
    let consult_list=await this.app.mysql.query(sql);
    console.log(consult_list);
  };

  async find_comment(){
    var sql="select * from t_course_comment";
    let comment_list=await this.app.mysql.query(sql);
    console.log(comment_list);
  };

  async find_update(){
    var sql="select * from t_course_update";
    let update_list=await this.app.mysql.query(sql);
    console.log(update_list);
  };

  async find_teacher(course_id){
    var sql="select * from t_course,t_teacher where t_course.tea_id=t_teacher.tea_id and t_course.course_id=?";
    let teacher_list=await this.app.mysql.query(sql,[course_id]);
    console.log(teacher_list);
  };

  async find_user(){
    var sql="select * from t_user where user_id=1";
    let user_list=await this.app.mysql.query(sql);
    console.log(user_list);
  };
}

module.exports = UserService;