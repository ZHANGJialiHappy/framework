import { getData } from "./fetch.js";

// Implement  HTTP request GET method on "/BirdQuiz.json" resource
export async function getQuiz() {
  return getData("./birdQuiz.json");
}
