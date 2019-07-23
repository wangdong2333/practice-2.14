'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async category(req,res){
  
    const { ctx } = this;
    const categorys = await ctx.service.blogs.find_blog_categorys();
    console.log(categorys);

        if(categorys.length>0)  {

          this.ctx.request.json ={
              code:0,
              data:categorys,
              msg:'成功'
          }
      }else {
        this.ctx.body ={
          code:1,
          data:'',
          msg:'失败'
      }

    }
    // var a={categorys};
    // console.log(a);
    // Object.assign()
    // res.json(a)
    // return a;

  };
  async tag(){
  
    const { ctx } = this;
    const tags = await ctx.service.blogs.find_blog_tags();
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

  async blogs(){
  
    const { ctx } = this;
    const blogss = await ctx.service.blogs.find_blogs();
    console.log(blogss);
    if(blogss.length>0)  {

      this.ctx.body ={
          code:0,
          data:blogss,
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

  async blog_one(){
  var blog_id = this.ctx.query.blog_id;
  

    const { ctx } = this;
    const update_hits = await ctx.service.blogs.update_hits(blog_id);
    console.log(update_hits);
    const blog_one = await ctx.service.blogs.find_blog_one(blog_id);
    console.log(blog_one);
    if(blog_one.length>0)  {

      this.ctx.body ={
          code:0,
          data:blog_one,
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
  /*
  async blog_one(){
    var blog_id = this.ctx.query.blog_id;
  
    const { ctx } = this;
    const blog_one = await ctx.service.blogs.find_blog_one(blog_id);
    console.log(blog_one);
    if(blog_one.length>0)  {

      this.ctx.body ={
          code:0,
          data:blog_one,
          msg:'成功'
      }
  }else {
    this.ctx.body ={
      code:1,
      data:'',
      msg:'失败'
    }

  }

  };*/

  async user(){
    var blog_id = this.ctx.query.blog_id;
  
    const { ctx } = this;
    const user = await ctx.service.blogs.find_blog_user(blog_id);
    console.log(user);
    if(user.length>0)  {

      this.ctx.body ={
          code:0,
          data:user,
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

  async blog_com(){
    var blog_id = this.ctx.query.blog_id;
  
    const { ctx } = this;
    const blog_com = await ctx.service.blogs.find_blog_com(blog_id);
    console.log(blog_com);
    if(blog_com.length>0)  {

      this.ctx.body ={
          code:0,
          data:blog_com,
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

  async add_com(){
    // var blog_id = this.ctx.query(blog_id);
  
    const { ctx } = this;
    const add_com = await ctx.service.blogs.add_com();
    if(add_com.affectedRows>0)  {
      this.ctx.body ={
          code:0,
          data:add_com,
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
 
  async all(){
  
    const { ctx } = this;
    const all = await ctx.service.blogs.find_all();
    console.log(all);
    if(all.length>0)  {

      this.ctx.body ={
          code:0,
          data:all,
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

  async search(){
    var content = this.ctx.query.content;
  
    const { ctx } = this;
    const search = await ctx.service.blogs.search(content);
    console.log(search);
    if(search.length>0)  {

      this.ctx.body ={
          code:0,
          data:search,
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

  
  async my_course(){
   
    var user_id = this.ctx.query.user_id;
  
    const { ctx } = this;
    const my_course = await ctx.service.blogs.find_my_course(user_id);
    console.log(my_course);
    if(my_course.length>0)  {

      this.ctx.body ={
          code:0,
          data:my_course,
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

  async my_blog(){
   
    var user_id = this.ctx.query.user_id;
  
    const { ctx } = this;
    const my_blog = await ctx.service.blogs.find_my_blog(user_id);
    console.log(my_blog);
    if(my_blog.length>0)  {

      this.ctx.body ={
          code:0,
          data:my_blog,
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

  async mine(){
   
    var user_id = this.ctx.query.user_id;
  
  
    const { ctx } = this;
    const mine = await ctx.service.blogs.find_mine(user_id);
    console.log(mine);
    if(mine.length>0)  {

      this.ctx.body ={
          code:0,
          data:mine,
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

 async add_com(){
   
    // var cate_id = this.ctx.query.cate_id;
    const { ctx } = this;
    const add_com = await ctx.service.blogs.add_com();
    console.log(add_com);
    if(add_com.affectedRows>0)  {

      this.ctx.body ={
          code:0,
          data:add_com,
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
  async add_blog(){
   
    // var cate_id = this.ctx.query.cate_id;
    const { ctx } = this;
    const add_blog = await ctx.service.blogs.add_blog();
    console.log(add_blog);
    if(add_blog.affectedRows>0)  {

      this.ctx.body ={
          code:0,
          data:add_blog,
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

module.exports = BlogController;
