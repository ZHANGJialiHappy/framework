export interface Quiz {
  id:number,
  quizName:string
  questions:Question[]
}

export interface Question {
  questionText:string,
  answers:Answer[],
  correctAnswer:number
}

export interface Answer {
  text:string,
  description:string,
  imgURL:string
}