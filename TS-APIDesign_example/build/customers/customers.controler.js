"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.putCustomer = exports.getCustomer = exports.postCustomer = exports.getAllCustomers = void 0;
const model_manager_1 = require("../model/model-manager");
const CUSTOMERS_FILE = "./customers.json";
function getAllCustomers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let modelMgr = new model_manager_1.ModelManager(CUSTOMERS_FILE);
            let allCustomers = yield modelMgr.getAll();
            res.json(allCustomers);
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.getAllCustomers = getAllCustomers;
function postCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let modelMgr = new model_manager_1.ModelManager(CUSTOMERS_FILE);
            let newCustomer = req.body;
            yield modelMgr.add(newCustomer);
            res.end();
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.postCustomer = postCustomer;
function getCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let modelMgr = new model_manager_1.ModelManager(CUSTOMERS_FILE);
            let id = parseInt(req.params.id);
            let customer = yield modelMgr.getByID(id);
            res.json(customer);
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.getCustomer = getCustomer;
function putCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let modelMgr = new model_manager_1.ModelManager(CUSTOMERS_FILE);
            let id = parseInt(req.params.id);
            let customer = req.body;
            yield modelMgr.update(id, customer);
            res.end();
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.putCustomer = putCustomer;
function deleteCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let modelMgr = new model_manager_1.ModelManager(CUSTOMERS_FILE);
            let id = parseInt(req.params.id);
            yield modelMgr.remove(id);
            res.end();
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    });
}
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customers.controler.js.map