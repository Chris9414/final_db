const ProductInCarServices = require('../services/productInCar.services');

const addProduct = async (req,res,next) => {
    try {
        const body = req.body
        const product = await ProductInCarServices.addProduct(body)
        res.status(201).json(product)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addProduct,
}