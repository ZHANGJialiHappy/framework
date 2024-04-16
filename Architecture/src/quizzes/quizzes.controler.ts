import { Quiz } from "./quizzes.model";
import {Request, Response} from "express"
import {ModelManager} from "../model/model-manager"
const QUIZZES_FILE = "./quizzes.json";

export async function postQuiz (req:Request, res:Response) {
    try {
      let quizModel = new ModelManager<Quiz, number>(QUIZZES_FILE);
      let newQuiz = req.body;
      await quizModel.add(newQuiz);
      res.end()
    } catch (error) {
      // res.statusMessage=
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.status(400).send(error.message);
    }
  }
  export async function getQuiz (req:Request, res:Response) {
    try {
      let quizModel = new ModelManager<Quiz, number>(QUIZZES_FILE);
      let id = parseInt(req.params.id);
      let quiz = await quizModel.getByID(id);
      // res.header("Access-Control-Allow-Origin", "*");
      // res.header(
      //   "Access-Control-Allow-Headers",
      //   "Origin, X-Requested-With, Content-Type, Accept"
      // );
      res.json(quiz);
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }
