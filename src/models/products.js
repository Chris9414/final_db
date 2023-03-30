'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.Users, {foreignKey: "userId"} ),
      Products.hasMany(models.ProductInCar, {foreignKey: "carId"}),
      Products.hasMany(models.ProductInOrder, {foreignKey: "productsId"})
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    availableQty: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    productImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};