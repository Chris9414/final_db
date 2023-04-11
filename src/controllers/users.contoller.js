const { transporter } = require('../database/middlewares/mailer');
const UserServices = require('../services/users.services');

const getUserCar = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getUserCar(id)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const createUser = async (req,res,next) => {
    try {
        const body = req.body;
        const newUser = await UserServices.createUser(body)
        res.status(201).json(newUser);
        const { id, email, username } = result;
        await transporter.sendMail({
        from: "chris.and.9414@gmail.com",
        to: result.email,
        subject: "Bienvenido al E-commerce",
        html: `
            <p>Hola ${result.username} Bienvenido al E-commerce</p>
            <p> Ahora haces parte de esta gran comunidad y tendras acceso a la diferentes funcionalidades </p>
      `,
    });
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
    getUserCar,
    createUser,
    updateUser,
}