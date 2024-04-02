import * as quizModel from "./quizzes.model.js";

export async function getAllQuizzes(req, res) {
  try {
    let allQuiz = await quizModel.getAll();
    res.json(allQuiz);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function postQuiz(req, res) {
  try {
    let newQuiz = await req.body;
    await quizModel.add(newQuiz);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
