'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/getOpenid',controller.home.getOpenid);
  router.post('/postCode',controller.home.postCode);
  router.post('/postQuestionCode',controller.home.postQuestionCode);
  router.post('/postSearchCode',controller.home.postSearchCode);
};
