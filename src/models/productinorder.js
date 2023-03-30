'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductInOrder.belongsTo(models.Orders, {foreignKey: "orderId"}),
      ProductInOrder.belongsTo(models.Products, {foreignKey: "productsId"})
    }
  }
  ProductInOrder.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductInOrder',
  });
  return ProductInOrder;
};