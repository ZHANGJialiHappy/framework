import { ModelManager } from "../model/model-manager"
import { Request, Response } from "express"
import { Customer } from "./customers.model"
const CUSTOMERS_FILE = "./customers.json";

export async function getAllCustomers(req: Request, res: Response) {
  try {
    let modelMgr = new ModelManager<Customer, number>(CUSTOMERS_FILE);
    let allCustomers = await modelMgr.getAll();
    res.json(allCustomers);
  } catch (error:any) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function postCustomer(req: Request, res: Response) {
  try {
    let modelMgr = new ModelManager<Customer, number>(CUSTOMERS_FILE);
    let newCustomer = req.body;
    await modelMgr.add(newCustomer);
    res.end()
  } catch (error:any) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}
export async function getCustomer(req: Request, res: Response) {
  try {
    let modelMgr = new ModelManager<Customer, number>(CUSTOMERS_FILE);
    let id = parseInt(req.params.id)
    let customer = await modelMgr.getByID(id);
    res.json(customer);
  } catch (error:any) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function putCustomer(req: Request, res: Response) {
  try {
    let modelMgr = new ModelManager<Customer, number>(CUSTOMERS_FILE);
    let id = parseInt(req.params.id)
    let customer = req.body;
    await modelMgr.update(id, customer);
    res.end();
  } catch (error:any) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function deleteCustomer(req: Request, res: Response) {
  try {
    let modelMgr = new ModelManager<Customer, number>(CUSTOMERS_FILE);
    let id = parseInt(req.params.id)
    await modelMgr.remove(id);
    res.end();
  } catch (error:any) {
    res.status(400).send(error.message);
  }
}
