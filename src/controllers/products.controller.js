const ProductServices = require('../services/products.services');

const getAllAvailable = async (req,res,next) => {
    try {
        const result = await ProductServices.getAllAvailable()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAvailable,
}