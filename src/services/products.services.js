const models = require('../models');

class ProductServices {
    static async getAllAvailable() {
        try {
            const result = await Products.getAll(
                {
                    where: availableQty > 0,
                    includes: {
                        model: "Users",
                        attributes: ["username"],
                    }
                })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductServices;