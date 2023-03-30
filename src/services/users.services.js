const {Users} = require('../models')

class UserServices {
    static async createUser(body) {
        try {
            const newUser = await Users.create(body)
            return newUser
        } catch (error) {
            throw error
        }
    } 

    static async updateUser(body, id) {
        try {
            const result = await Users.update(body, {
                where: {id},
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices;