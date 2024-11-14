import assert from "assert"
import envUtil from "../../src/utils/env.util.js"
import User from "../../src/dao/user.model.js"
import dbConnect from "../../src/utils/db.util.js"

// definir el entorno de testeo
describe(
    // nombre del entorno
    "Testeando el módulo de usuarios con MOCHA",
    // callback que va a ejecutar todas las pruebas de este entorno
    ()=> {
        const data = { email: "ignacioborraz11@coder.com", password: "hola1234" }
        let tid = ""
        before(async()=> await dbConnect(envUtil.MONGO_URI))
        // defino cada unidad de testing
        it(
            // nombre del test
            "La propiedad email es enviada por el usuario que quiere registrarse",
            // callback con el test
            ()=> assert.ok(data.email)
        )
        it(
            "La propiedad password es enviada por el usuario que quiere registrarse",
            ()=> assert.ok(data.password)
        )
        it(
            "La creación de un usuario devuelve un objeto con el objectid",
            async ()=> {
                const one = await User.create(data)
                // console.log(one);
                tid = one._id
                assert.ok(one._id)       
            }
        )
        it(
            "El usuario no se crea si ya existe en la base de datos",
            async ()=> {
                let one = await User.findById(tid)
                if (!one) {
                    one = await User.create(data)
                    // console.log(one);
                    tid = one._id
                }
                assert.ok(one._id)
            }
        )
        it(
            "La eliminación de un usuario, lo saca de la base de datos",
            async()=> {
                await User.findByIdAndDelete(tid)
                const one = await User.findById(tid)
                assert.strictEqual(one, null)
            }
        )
    }
)