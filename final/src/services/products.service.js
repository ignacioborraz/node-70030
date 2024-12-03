import Product from "../models/products.model.js";

const createService = async (data) => {
  try {
    const one = await Product.create(data);
    return one;
  } catch (error) {
    throw error;
  }
};
const readService = async (filter) => {
  try {
    const all = await Product.find(filter);
    return all;
  } catch (error) {
    throw error;
  }
};
const readOneService = async (pid) => {
  try {
    const one = await Product.findById(pid);
    return one;
  } catch (error) {
    throw error;
  }
};
const updateOneService = async (pid, data, opts) => {
  try {
    const one = await Product.findByIdAndUpdate(pid, data, opts);
    return one;
  } catch (error) {
    throw error;
  }
};
const destroyOneService = async (pid) => {
  try {
    const one = await Product.findByIdAndDelete(pid);
    return one;
  } catch (error) {
    throw error;
  }
};

export {
  createService,
  readService,
  readOneService,
  updateOneService,
  destroyOneService,
};
