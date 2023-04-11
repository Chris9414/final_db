const {logError, errorHandler,ormErrorHandler} = require('../database/middlewares/error.handler');

const errorHandlerRouter = (app) => {
    app.use(logError);
    app.use(errorHandler);
    app.use(ormErrorHandler);

  app.use("*", (req, res) => {
    return res  
      .status(404)
      .send("direccion no disponible");
  });
};


module.exports = errorHandlerRouter;