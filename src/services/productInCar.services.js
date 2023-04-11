const {ProductInCar} = require('../models')

class ProductInCarServices {
    static async addProduct(body) {
        try {
            const product = await ProductInCar.create(body)
            return product
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductInCarServices;