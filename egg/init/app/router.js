'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.news.index);
  router.get('/content', controller.news.content);


  // router.get('/tag', controller.home.tag);
  // router.get('/course',controller.home.course);
  // router.get('/user',controller.home.user);


  // router.get('/free', controller.course.free);
  // router.get('/chapter', controller.course.chapter);
  // router.get('/consult', controller.course.consult);
  // router.get('/comment', controller.course.comment);
  // router.get('/update', controller.course.update);
  // router.get('/teacher', controller.course.teacher);









  // router.get('/news', controller.news.index);
  // router.get('/newscontent', controller.news.content);

  // router.get('/newslist/:id', controller.news.newslist);

};
