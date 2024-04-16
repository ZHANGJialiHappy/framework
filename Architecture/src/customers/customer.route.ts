import express from "express";
import {
  getAllCustomers,
  postCustomer,
  getCustomer,
  putCustomer,
  deleteCustomer,
} from "./customers.controler";
import cors from "cors";

export const customerRouter = express.Router();
customerRouter.use(cors());

// middleware specific to this route
customerRouter.use(express.json());

// route handlers
customerRouter.get("/customers", getAllCustomers);
customerRouter.post("/customers", postCustomer);

customerRouter.get("/customers/:id", getCustomer);

customerRouter.put("/customers/:id", putCustomer);

customerRouter.delete("/customers/:id", deleteCustomer);
