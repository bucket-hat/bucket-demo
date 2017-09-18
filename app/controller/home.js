'use strict';

module.exports = (app) => {
  class home extends app.library.controller {

    async index() {
      const { ctx } = this;
      const result = await app.service.home.index(1);
      if(result) {
        ctx.status = 200;
        ctx.body = result;
      } else {
        ctx.status = 200;
        ctx.body = { 'message': 'It wrong.'  };
      }
    }

    async getId() {
      const { params } = this.ctx;
      this.ctx.body = { id: params.id };
    }

  }
  return home;
};