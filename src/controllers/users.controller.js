import User from "../dao/user.model.js"
import { faker } from "@faker-js/faker"
import CustomError from "../utils/errors/CustomError.util.js"
import errors from "../utils/errors/errors.js"
import winstonLogger from "../utils/winston.util.js"

// metodo para la produccion!!!
const create = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            CustomError.newError(errors.error)
            // si no existe el email o el password
            // construyo un error personalizado con los datos del diccionario que correspondan
        }
        const data = req.body
        const one = await User.create(data)
        return res.status(201).json({
            response: one,
            message: "USER CREATED"
        })
    } catch (error) {
        return next(error)
    }
}

// metodo para dev/test
const createMock = async (req, res, next) => {
    const name = faker.person.firstName().toLowerCase()
    const lastname = faker.person.lastName().toLowerCase()
    const data = {
        name,
        email: name + lastname + "@coder.com",
        password: "hola1234",
        avatar: faker.image.avatar()
    }
    const one = await User.create(data)
    return res.status(201).json({
        response: one,
        message: "USER CREATED"
    })
}

const createMocks = async (req, res, next) => {
    const { quantity } = req.params
    for (let i = 0; i <= quantity; i++) {
        const name = faker.person.firstName().toLowerCase()
        const lastname = faker.person.lastName().toLowerCase()
        const data = {
            name,
            email: name + lastname + "@coder.com",
            password: "hola1234",
            avatar: faker.image.avatar()
        }
        const one = await User.create(data)
    }
    return res.status(201).json({
        message: quantity + "MOCK USERS CREATED"
    })
}

const readAll = async (req, res, next) => {
    try {
        const response = await User.find()
        // cada console.log informativo ahora es necesario
        // console.log(response);
        // cambiarlo por winston.info
        // winstonLogger.info(response)
        if (response.length > 0) {
            return res.status(200).json({ message: "USERS READ", response })
        } else {
            CustomError.newError(errors.notFound)
        }
    } catch (error) {
        return next(error)
    }
}

const read = async (req, res, next) => {
    try {
        const { uid } = req.params
        const response = await User.findOne({ _id: uid })
        if (response) {
            return res.status(200).json({ message: "USER READ", response })
        } else {
            CustomError.newError(errors.notFound)
        }
    } catch (error) {
        return next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const { uid } = req.params
        const data = req.body
        const response = await User.findOneAndUpdate({ _id: uid }, data, { new: true })
        if (response) {
            return res.status(200).json({ message: "USER UPDATED", response })
        } else {
            CustomError.newError(errors.notFound)
        }
    } catch (error) {
        return next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const { uid } = req.params
        const response = await User.findOneAndDelete({ _id: uid })
        if (response) {
            return res.status(200).json({ message: "USER DELETED", response })
        } else {
            CustomError.newError(errors.notFound)
        }
    } catch (error) {
        return next(error)
    }
}

export { create, createMock, createMocks, readAll, read, update, destroy }