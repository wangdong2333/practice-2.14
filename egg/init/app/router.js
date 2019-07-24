'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.home.index);
  router.get('/tag', controller.home.tag);
  router.get('/course',controller.home.course);
  router.get('/user',controller.home.user);
  router.get('/add_user',controller.home.add_user);


  router.get('/free', controller.course.free);
  router.get('/course_one', controller.course.course_one);
  router.get('/chapter', controller.course.chapter);
  router.get('/consult', controller.course.consult);
  router.get('/comment', controller.course.comment);
  router.get('/update', controller.course.update);
  router.get('/teacher', controller.course.teacher);
  router.get('/course_infor', controller.course.course_infor);
  router.get('/course_com', controller.course.course_com);
  router.get('/course_type', controller.course.course_type);
  router.get('/my_free_course', controller.course.my_free_course);
  router.get('/my_pay_course', controller.course.my_pay_course);
  router.get('/my_job_course', controller.course.my_job_course);
  router.get('/stage', controller.course.stage);
  router.get('/add_consult',controller.course.add_consult);
  router.get('/update_study',controller.course.update_study);
  router.get('/course_exercise',controller.course.course_exercise);


  router.get('/blog_category',controller.blog.category);
  router.get('/blog_tag',controller.blog.tag);
  router.get('/blogs',controller.blog.blogs);
  // router.get('/update_hits',controller.blog.update_hits);
  router.get('/blog_one',controller.blog.blog_one);
  router.get('/blog_user',controller.blog.user);
  router.get('/blog_com',controller.blog.blog_com);
  router.get('/add_com',controller.blog.add_com);
  router.get('/add_blog',controller.blog.add_blog);



  router.get('/all',controller.blog.all);
  router.get('/search',controller.blog.search);
  router.get('/my_course',controller.blog.my_course);
  router.get('/my_blog',controller.blog.my_blog);
  router.get('/mine',controller.blog.mine);


















};
