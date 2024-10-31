import { Schema, model } from "mongoose";

const collection = "products"
const schema = new Schema({
    title: { type: String, required: true, index: true },
    photo: { type: String, default: "https://economipedia.com/wp-content/uploads/Definicion-de-Producto-1.jpg" },
    category: { type: String, default: "" },
    price: { type: Number, default: 10 },
    stock: { type: Number, default: 10 },
})

const Product = model(collection, schema)
export default Product