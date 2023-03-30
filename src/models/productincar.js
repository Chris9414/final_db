'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductInCar.belongsTo(models.Cars, {foreignKey: "carId"}),
      ProductInCar.belongsTo(models.Products, {foreignKey: "productId"})
    }
  }
  ProductInCar.init({
    cardId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductInCar',
  });
  return ProductInCar;
};