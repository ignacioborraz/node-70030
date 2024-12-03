import __dirname from "../../utils.js";

const opts = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "PRODUCTOS",
      description: "Documentación del CRUD de productos",
    },
  },
  apis: [`${__dirname}/src/docs/*.yaml`],
};

export default opts;
