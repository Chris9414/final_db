const {Users, Cars, ProductInCar} = require('../models')

class UserServices {
    static async getUserCar(id) {
        try {
            const result = await Users.findByPk(id,{
                attributes: ["username", "email", "avatar"],
                include: {
                    model: Cars,
                    attributes: ["id","totalPrice"],
                    include: {  
                        model: ProductInCar,
                        attributes: ["productId","quantity","price","available"]
                    }
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getUser(email) {
        try {
          const user = await Users.findOne({
            where: { email },
          });
          return user;
        } catch (error) {
          throw error;
        }
      }
    
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