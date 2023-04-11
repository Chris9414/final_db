const { check } = require("express-validator");
const validateResult = require("./validate");

const createCarValidator = [
  check("totalPrice", "Error con el precio")
    .exists()
    .withMessage("No se encontro el precio")
    .notEmpty()
    .withMessage("No se encontro un valor para el precio")
    .isFloat()
    .withMessage("La precio debe ser un numero"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];


module.exports = {
  createCarValidator,
};