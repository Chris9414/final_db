const { check, param } = require("express-validator");
const validateResult = require("./validate");

const createProductValidator = [
  check("name", "Error con el campo name")
    .exists()
    .withMessage("El name debe existir")
    .notEmpty()
    .withMessage("El name no debe estar vacio")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres"),
  check("description", "Error con la description")
    .exists()
    .withMessage("No se encontro la description")
    .notEmpty()
    .withMessage("No se encontro un valor para la description")
    .isString()
    .withMessage("La description debe ser un string"),
  check("price", "Error con el precio")
    .exists()
    .withMessage("No se encontro el precio")
    .notEmpty()
    .withMessage("No se encontro un valor para el precio")
    .isFloat()
    .withMessage("La precio debe ser un numero"),
  check("quantity", "Error con la cantidad")
    .exists()
    .withMessage("No se encontro la cantidad")
    .notEmpty()
    .withMessage("No se encontro un valor para la cantidad")
    .isFloat()
    .withMessage("La cantidad debe ser un numero"), 
  check("productImg", "Error con la imagen del producto")
    .isString()
    .withMessage("la imagen del producto debe ser un URL")
    .exists()
    .withMessage("No se encuentra la imagen del producto")
    .notEmpty()
    .withMessage("La imagen del producto no debe ser un string vacio"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const updateProductValidator = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  check("description", "Error con la description")
    .exists()
    .withMessage("No se encontro la description")
    .notEmpty()
    .withMessage("No se encontro un valor para la description")
    .isString()
    .withMessage("La description debe ser un string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createProductValidator,
  updateProductValidator,
};