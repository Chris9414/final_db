const ProductServices = require('../services/products.services');

const getAllAvailable = async (req,res,next) => {
    try {
        const result = await ProductServices.getAllAvailable()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const createProduct = async (req,res,next) => {
    try {
        const body = req.body;
        const newProduct = await ProductServices.createProduct(body)
        console.log(newProduct)
        res.status(201).json(newProduct)
    } catch (error) {
        next(error)
    }
}

const updateDescription = async (req,res,next) => {
    try {
        const {id} = req.params;
        const description = req.body
        await ProductServices.updateDescription(id,description)
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAvailable,
    createProduct,
    updateDescription,
}