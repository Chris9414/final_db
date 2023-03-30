const usersRoutes = require('./users.routes');
const productsRoutes = require('./products.routes');

const ApiRoutes = (app) => {
    app.use("/api/v1", usersRoutes);
    app.use("/api/v1", productsRoutes);
}

module.exports = ApiRoutes;