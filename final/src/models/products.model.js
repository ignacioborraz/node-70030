import { Schema, model } from "mongoose";

const collection = "products";
const schema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  imagen: {
    type: String,
    default: "https://s1.significados.com/foto/producto-og.jpg",
  },
  stock: { type: Number, default: 1 },
  price: { type: Number, default: 1 },
});

const User = model(collection, schema);
export default User;
