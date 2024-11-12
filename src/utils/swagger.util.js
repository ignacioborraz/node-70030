import __dirname from "../../utils.js"

const opts = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "CODER COMMERCE",
            description: "DOCUMENTATION OF CODER COMMERCE API"
        }
    },
    apis: [`${__dirname}/src/docs/*.yaml`],
}

export default opts