import { Schema, model } from "mongoose";

const collection = "users"
const schema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    age: { type: Number, default: 18 },
    role: { type: Number, default: 0 },
    avatar: { type: String }
})

const User = model(collection, schema)
export default User