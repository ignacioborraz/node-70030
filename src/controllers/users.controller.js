import User from "../dao/user.model.js"
import { faker } from "@faker-js/faker"

// metodo para la produccion!!!
const create = async (req, res) => {
    const data = req.body
    const one = await User.create(data)
    return res.status(201).json({
        response: one,
        message: "USER CREATED"
    })
}

// metodo para dev/test
const createMock = async (req, res) => {
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

const createMocks = async (req, res) => {
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

export { create, createMock, createMocks }