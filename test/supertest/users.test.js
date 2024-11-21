import { expect } from "chai";
import supertest from "supertest"
import envUtil from "../../src/utils/env.util.js";

const requester = supertest(`http://localhost:${envUtil.PORT}/api`)

describe(
    "Testendo las funcionalidades de User",
    ()=> {
        const data = { email: "ignaaaaacio@coder.com", password: "hola1234" }
        let tid = ""
        it(
            "Se crea correctamente un ususario",
            async ()=> {
                const response = await requester.post("/users").send(data)
                const { _body, statusCode } = response
                tid = _body.response._id
                expect(statusCode).to.be.equals(201)
            }
        )
        it(
            "Se leen correctamente todos los usuarios",
            async ()=> {
                const response = await requester.get("/users")
                const {  statusCode } = response
                // console.log({ statusCode });
                expect(statusCode).to.be.equals(200)
            }
        )
        it(
            "La lectura de usuarios devuelve un array de datos",
            async ()=> {
                const response = await requester.get("/users")
                const { _body } = response
                // console.log({ _body });
                expect(_body.response).to.be.an('array')
            }
        )
        it(
            "La lectura de un usuario devuelve un objeto con los datos del usuario",
            async ()=> {
                const response = await requester.get("/users/"+tid)
                const { _body } = response
                // console.log({ _body });
                expect(_body.response).to.be.an('object')
            }
        )
        it(
            "Se actualiza correctamente un usuario",
            async ()=> {
                const obj = { password: "chau1234" }
                const response = await requester.put("/users/"+tid).send(obj)
                const { statusCode } = response
                expect(statusCode).to.be.equals(200)
            }
        )
        it(
            "Se elimina correctamente un usuario",
            async ()=> {
                const response = await requester.delete("/users/"+tid)
                const { statusCode } = response
                expect(statusCode).to.be.equals(200)
            }
        )
    }
)