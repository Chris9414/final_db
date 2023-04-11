const usersRoutes = require('./users.routes');
const productsRoutes = require('./products.routes');
const carRoutes = require('./car.routes');
const productInCarRoutes = require('./productInCar.routes');
const authRoutes = require('./auth.routes');

const ApiRoutes = (app) => {
    app.use("/api/v1", usersRoutes);
    app.use("/api/v1", productsRoutes);
    app.use("/api/v1", carRoutes);
    app.use("/api/v1", productInCarRoutes);
    app.use("/api/v1", authRoutes);
}

module.exports = ApiRoutes;