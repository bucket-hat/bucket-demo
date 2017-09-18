'use strict';

module.exports = (app) => {
  const router = app.library.httpRouter();

  router.get('/:id', 'home.getId');

  router.get('/', 'home.index');
  router.get('/home', 'home.index');


  return router;
};
