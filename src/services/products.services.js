const {Products} = require('../models');

class ProductServices {
    static async getAllAvailable() {
        try {
            const result = await Products.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async createProduct(body) {
        try {
            const newProduct = await Products.create(body)
            return newProduct
        } catch (error) {
            throw error
        }
    }

    static async updateDescription(id, description) {
        try {
            console.log(id)
            console.log(description)
            const newDescription = await Products.update(description, {
                where: {id}
            })
            console.log(newDescription)
            return newDescription
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductServices;