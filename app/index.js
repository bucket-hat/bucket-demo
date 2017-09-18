module.exports = (app) => {
  
    const { logger } = app.library;
    const httpRouter = require('./httpRouter')(app);
    
    logger.debug(httpRouter);
  
    app.beforeExit.push(async() => {
      await httpRouter.serverClose();
      await new Promise(resolve => setTimeout(resolve, 800));
    });
  };