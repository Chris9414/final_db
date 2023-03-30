const UserServices = require('../services/users.services');

const createUser = async (req,res,next) => {
    try {
        const body = req.body;
        const newUser = await UserServices.createUser(body)
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req,res,next) => {
    try {
        const body = req.body;
        const {id} = req.params;
        await UserServices.updateUser(body,id)
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    updateUser,
}