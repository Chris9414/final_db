const CarServices = require('../services/car.services');

const createCar = async (req,res,next) => {
    try {
        const body = req.body
        const product = await CarServices.createCar(body)
        res.status(201).json(product)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createCar,
}