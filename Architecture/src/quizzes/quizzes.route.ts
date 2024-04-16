// index.js
import express from 'express'
import {postQuiz , getQuiz } from './quizzes.controler'
import cors from "cors"
export const quizzesRouter = express.Router();

// middleware specific to this route
quizzesRouter.use(express.json())
// quizzesRouter.use(cors())
// Create a new quiz 
quizzesRouter.post("/quizzes", postQuiz );

//Retrieve the quiz named as quizName
quizzesRouter.get("/quizzes/:id", getQuiz);


