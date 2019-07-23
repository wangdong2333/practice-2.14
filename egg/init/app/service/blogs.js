'use strict';

const Service = require('egg').Service;

class BlogsService extends Service {
  
  async find_blog_categorys(){
    var sql="select * from t_blog_category";
    let blog_category_list=await this.app.mysql.query(sql);
    console.log(blog_category_list);

    
    return blog_category_list;
  };

  async find_blog_tags(){
    var sql="select * from t_tag";
    let tag_list=await this.app.mysql.query(sql);
    console.log(tag_list);
    return tag_list;
  };

  async find_blogs(){
    var sql="select * from t_blog";
    let blog_list=await this.app.mysql.query(sql);
    console.log(blog_list);
    return blog_list;

  };

  async find_blog_one(blog_id){
    var sql="select * from t_blog where blog_id=?";
    let blog_list=await this.app.mysql.query(sql,[blog_id]);
    console.log(blog_list);
    return blog_list;

  };
  
  async find_blog_user(blog_id){
    var sql="select * from t_blog,t_user where t_blog.token_id=t_user.user_id and t_blog.blog_id=?";
    let blog_list=await this.app.mysql.query(sql,[blog_id]);
    console.log(blog_list);
    return blog_list;

  };

  async find_blog_com(blog_id){
    var sql="select * from t_comment where blog_id=?";
    let com_list=await this.app.mysql.query(sql,[blog_id]);
    console.log(com_list);
    return com_list;

  };

  

  async find_all(){
    var sql="select * from t_blog,t_course";
    let all_list=await this.app.mysql.query(sql);
    console.log(all_list);
    return all_list;
    
  };
  
  async search(content){
    var sql="select * from t_course,t_blog where t_course.keyword='?' and t_blog.title='?'";
    let search_list=await this.app.mysql.query(sql,[content],[content]);
    console.log(search_list);
    return search_list;

  };

  async find_my_course(user_id){
    var sql="select * from t_user_course,t_user,t_course where t_user_course.user_id=t_user.user_id and t_user_course.course_id=t_course.course_id and t_user.user_id=?";
    let my_course_list=await this.app.mysql.query(sql,[user_id]);
    console.log(my_course_list);
    return my_course_list;

  };

  async find_my_blog(user_id){
    var sql="select * from t_blog where token_id=?";
    let my_blog_list=await this.app.mysql.query(sql,[user_id]);
    console.log(my_blog_list);
    return my_blog_list;

  };

  async find_mine(cate_id){
    var sql="select * from t_user where user_id=?";
    let mine_list=await this.app.mysql.query(sql,[cate_id]);
    console.log(mine_list);
    return mine_list;

  };

  async add_com(){
    // var sql="select * from t_user where user_id=?";
    let add_com_list=await this.app.mysql.insert('t_comment',{
      content:'讲的good',
      token_id:'1',
      blog_id:'2',
    });
    console.log(add_com_list);
    return add_com_list;

  };

  async add_blog(){
    // var sql="select * from t_user where user_id=?";
    let add_blog_list=await this.app.mysql.insert('t_blog',{
      title:'blog4',
      content:'内容4',
      token_id:'4',
      cate_id:'1',
    });
    console.log(add_blog_list);
    return add_blog_list;

  };

  async update_hits(blog_id){
    var sql="update t_blog set hits=hits+1 where blog_id=?";
    let update_hits_list=await this.app.mysql.query(sql,[blog_id]);
    console.log(update_hits_list);
    return update_hits_list;

  };
}


module.exports = BlogsService;