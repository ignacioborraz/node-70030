import {expect} from "chai"
import envUtil from "../../src/utils/env.util.js"
import User from "../../src/dao/user.model.js"
import dbConnect from "../../src/utils/db.util.js"

describe(
    "Testeando el módulo de usuarios con CHAI",
    ()=>{
        const data = { email: "ignaaaaaacio@coder.com", password: "hola1234" }
        let tid = ""
        before(async()=> await dbConnect(envUtil.MONGO_URI))
        it(
            "La propiedad email es enviada por el usuario que quiere registrarse",
            ()=> expect(data).to.have.property("email")
        )
        it(
            "La propiedad email es de tipo string",
            ()=> expect(data.email).to.be.a("string")
        )
        it(
            "La propiedad email entrega un email",
            ()=>{
                const haveAnAt = data.email.includes("@")
                expect(haveAnAt).to.be.equal(true)
            }
        )
        it(
            "La creación de un usuario devuelve un objeto con el objectid",
            async ()=> {
                const one = await User.create(data)
                // console.log(one);
                tid = one._id
                expect(one).to.have.property("_id")
            }
        )
        it(
            "La eliminación de un usuario, lo saca de la base de datos",
            async()=> {
                await User.findByIdAndDelete(tid)
                const one = await User.findById(tid)
                expect(one).not.exist
            }
        )
        it(
            "La creación de un usuario devuelve un usuario con un rol por defecto",
            async ()=> {
                const one = await User.create(data)
                expect(one).to.have.property("role")
                expect(one.role).to.be.a("number")
                expect(one.role).to.be.equal(0)
            }
        )
    }
)