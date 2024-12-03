import { expect } from "chai";
import supertest from "supertest";
import "dotenv/config.js";

const requester = supertest(`http://localhost:${process.env.PORT}/api`);

describe("Testenando productos", () => {
  const data = { titulo: "zapatillas", stock: 100, precio: 100 };
  let pid = "";
  it("Creando un producto", async () => {
    const response = await requester.post("/products").send(data);
    const { _body, statusCode } = response;
    pid = _body.response._id;
    expect(statusCode).to.be.equals(201);
  });
  it("Leyendo productos", async () => {
    const response = await requester.get("/products/");
    const { statusCode } = response;
    expect(statusCode).to.be.equals(200);
});
  it("Leyendo un producto", async () => {
    const response = await requester.get("/products/" + pid);
    const { statusCode } = response;
    expect(statusCode).to.be.equals(200);
});
  it("Actualizando un producto", async () => {
    const response = await requester.put("/products/" + pid);
    const { statusCode } = response;
    expect(statusCode).to.be.equals(200);
});
  it("Eliminando un producto", async () => {
    const response = await requester.delete("/products/" + pid);
    const { statusCode } = response;
    expect(statusCode).to.be.equals(200);
  });
});
