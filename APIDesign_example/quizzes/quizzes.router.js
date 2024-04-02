import express from "express";
import { postQuiz, getAllQuizzes } from "./quizzes.control.js";

export const quizzesRouter = express.Router();

quizzesRouter.use(express.json());

quizzesRouter.post("/quizzes", postQuiz);

quizzesRouter.get("/quizzes/:quizName", getAllQuizzes);
