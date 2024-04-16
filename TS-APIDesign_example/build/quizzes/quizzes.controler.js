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
exports.getQuiz = exports.postQuiz = void 0;
const model_manager_1 = require("../model/model-manager");
const QUIZZES_FILE = "./quizzes.json";
function postQuiz(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let quizModel = new model_manager_1.ModelManager(QUIZZES_FILE);
            let newQuiz = req.body;
            yield quizModel.add(newQuiz);
            res.end();
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.postQuiz = postQuiz;
function getQuiz(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let quizModel = new model_manager_1.ModelManager(QUIZZES_FILE);
            let id = parseInt(req.params.id);
            let quiz = yield quizModel.getByID(id);
            res.json(quiz);
        }
        catch (error) {
            // res.statusMessage=
            res.status(400).send(error.message);
        }
    });
}
exports.getQuiz = getQuiz;
//# sourceMappingURL=quizzes.controler.js.map