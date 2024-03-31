export class Answer {
  constructor(name, description, imageURL) {
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
  }
}

export class Question {
  constructor(questionText, answers = [], correctAnswer) {
    this.questionText = questionText;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

export class Quiz {
  constructor(title, questions = []) {
    this.title = title;
    this.questions = questions;
  }
}
