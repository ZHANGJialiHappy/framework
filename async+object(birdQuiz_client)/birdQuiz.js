import { Answer, Question, Quiz } from "./quiz.js";

export function getQuiz() {
  let answers1 = [
    new Answer(
      "Ostrich",
      "Ostrich description",
      "/images/_1firstTest/Ostrich.jpg"
    ),
    new Answer("Emu", "Emu description", "/images/_1firstTest/Emu.jpg"),
    new Answer(
      "Peregrine Falcon",
      "Peregrine Falcon description",
      "/images/_1firstTest/Falco_peregrinus.jpg"
    ),
    new Answer(
      "Penguin",
      "Penguin description",
      "/images/_1firstTest/penguin.jpg"
    ),
  ];
  let questions = [
    new Question(" haha What bird is the fastest on land?", answers1, 0),
  ];
  return new Quiz("Bird Quiz", questions);
}
