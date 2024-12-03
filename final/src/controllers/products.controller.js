import {
  createService,
  readService,
  readOneService,
  updateOneService,
  destroyOneService,
} from "../services/products.service.js";

const createController = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await createService(data);
    const message = "PRODUCTO CREADO";
    return res.status(201).json({ response, message });
  } catch (error) {
    return next(error);
  }
};
const readController = async (req, res, next) => {
  try {
    const filter = req.query;
    const response = await readService(filter);
    const message = "PRODUCTOS LEIDOS";
    return res.status(200).json({ response, message });
  } catch (error) {
    return next(error);
  }
};
const readOneController = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const response = await readOneService(pid);
    const message = "PRODUCTO LEIDO";
    return res.status(200).json({ response, message });
  } catch (error) {
    return next(error);
  }
};
const updateOneController = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const data = req.body;
    const opts = { new: true };
    const response = await updateOneService(pid, data, opts);
    const message = "PRODUCTO ACTUALIZADO";
    return res.status(200).json({ response, message });
  } catch (error) {
    return next(error);
  }
};
const destroyOneController = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const response = await destroyOneService(pid);
    const message = "PRODUCTO ELIMINADO";
    return res.status(200).json({ response, message });
  } catch (error) {
    return next(error);
  }
};

export {
  createController,
  readController,
  readOneController,
  updateOneController,
  destroyOneController,
};
