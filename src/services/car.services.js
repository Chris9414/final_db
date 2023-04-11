const {Cars} = require('../models')

class CarServices {
    static async createCar(body) {
        try {
            const product = await Cars.create(body)
            return product
        } catch (error) {
            throw error
        }
    }

}

module.exports = CarServices;