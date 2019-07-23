'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find_blog() {

    var sql="select * from t_blog";
    let slist =  await this.app.mysql.query(sql);
    console.log(slist);
    return slist;
    
  };

  async find_tag(){
    var sql="select * from t_tag";
    let tag_list=await this.app.mysql.query(sql);
    console.log(tag_list);
    return tag_list;

  };

  async find_course(){
    var sql="select * from t_course";
    let course_list=await this.app.mysql.query(sql);
    console.log(course_list);
    return course_list;
    
  };

  async find_free_courses(){
    var sql="select * from t_course where price = 0";
    
    let course_list=await this.app.mysql.query(sql);
    console.log(course_list);
    return course_list;

  };
  
  async find_course_one(course_id){
    var sql="select * from t_course where course_id=?";
    
    let course_list=await this.app.mysql.query(sql,[course_id]);
    console.log(course_list);
    return course_list;

  };

  async find_chapter(course_id){
    var sql="select * from t_course,t_chapter,t_section where t_course.course_id=t_chapter.course_id and t_chapter.chap_id=t_section.chap_id and t_course.course_id=?";

  let chapter_list=await this.app.mysql.query(sql,[course_id]);
  console.log(chapter_list);
  return chapter_list;

};

async find_consult(){
    var sql="select * from t_consult";
    let consult_list=await this.app.mysql.query(sql);
    console.log(consult_list);
  return consult_list;
    
  };
 
  async find_comment(){
    var sql="select * from t_course_comment";
    let comment_list=await this.app.mysql.query(sql);
    console.log(comment_list);
  return comment_list;

  };

  async find_update(){
    var sql="select * from t_course_update";
    let update_list=await this.app.mysql.query(sql);
    console.log(update_list);
  return update_list;

  };

  async find_teacher(course_id){
    var sql="select * from t_course,t_teacher where t_course.tea_id=t_teacher.tea_id and t_course.course_id=?";
    let teacher_list=await this.app.mysql.query(sql,[course_id]);
    console.log(teacher_list);
    return teacher_list;

  };

  async find_user(user_id){
    var sql="select * from t_user where user_id=?";
    let user_list=await this.app.mysql.query(sql,[user_id]);
    console.log(user_list);
    return user_list;

  };

  async find_course_infor(course_id){
    var sql="select * from t_course where course_id=?";
    let course_infor_list=await this.app.mysql.query(sql,[course_id]);
    console.log(course_infor_list);
    return course_infor_list;


  };

  async find_course_com(course_id){
    var sql="select * from t_course_comment where course_id=?";
    let course_com_list=await this.app.mysql.query(sql,[course_id]);
    console.log(course_com_list);
    return course_com_list;

  };

  async find_blog_categorys(){
    var sql="select * from t_blog_category";
    let blog_category_list=await this.app.mysql.query(sql);
    console.log(blog_category_list);
    return blog_category_list;

  };

  async find_course_type(){
    var sql="select * from t_blog_category,t_course where t_blog_category.cate_name=t_course.cate_type and t_blog_category.cate_id=1";
    let course_type_list=await this.app.mysql.query(sql);
    console.log(course_type_list);
    return course_type_list;

  };
  
  async find_my_free_course(user_id){
    var sql="select * from t_user_course,t_user,t_course where t_user_course.user_id=t_user.user_id and t_user_course.course_id=t_course.course_id and t_course.price=0 and t_user.user_id=?";
    let my_free_course_list=await this.app.mysql.query(sql,[user_id]);
    console.log(my_free_course_list);
    return my_free_course_list;

  };

  async find_my_pay_course(user_id){
    var sql="select * from t_user_course,t_user,t_course where t_user_course.user_id=t_user.user_id and t_user_course.course_id=t_course.course_id and t_course.price>0 and t_user.user_id=?";
    let my_pay_course_list=await this.app.mysql.query(sql,[user_id]);
    console.log(my_pay_course_list);
    return my_pay_course_list;

  };

  async find_my_pay_course(user_id){
    var sql="select * from t_user_course,t_user,t_job where t_user_course.user_id=t_user.user_id and t_user_course.job_id=t_job.job_id and t_user.user_id=?";
    let my_job_course_list=await this.app.mysql.query(sql,[user_id]);
    console.log(my_job_course_list);
    return my_job_course_list;

  };

  async find_stage(){
    var sql="select * from t_stage,t_tag,t_course where t_stage.stage_id=t_tag.stage_id and t_tag.tag_id=t_course.tag_id";
    let stage_list=await this.app.mysql.query(sql);
    console.log(stage_list);
    return stage_list;

  };

  async add_consult(){

    let add_consult_list=await this.app.mysql.insert('t_consult',{
      question:'问题4',
      status:0,
    });
    console.log(add_consult_list);
    return add_consult_list;

  };

  async update_study(course_id){

    var sql="update t_course set study_num=study_num+1 where course_id=?";
    let update_hits_list=await this.app.mysql.query(sql,[course_id]);
    console.log(update_hits_list);
    return update_hits_list;

  };

  async find_course_exercise(course_id){
    const client1 = this.app.mysql.get('client1');
    // await client1.query(sql, values);
    var sql="select * from t_exercise where course_id=?";
    let course_exercise_list=await client1.query(sql,[course_id]);
    console.log(course_exercise_list);
    return course_exercise_list;

  };

  async add_user(){

    let add_user_list=await this.app.mysql.insert('t_user',{
     nick_name:'name4',
     tel:'18103608888',
     password:'666666',
     
    });
    console.log(add_user_list);
    return add_user_list;

  };
}


module.exports = UserService;