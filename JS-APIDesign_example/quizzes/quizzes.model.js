import * as fs from "fs/promises";
const QUIZZES_FILE = "./quizzes/quizzes.json";

// return all customer from file
export async function getAll() {
  try {
    let quizzesTxt = await fs.readFile(QUIZZES_FILE);
    let quizzes = JSON.parse(quizzesTxt);
    return quizzes;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await save([]); // create a new file with ampty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

// save array of customers to file
async function save(quizzes = []) {
  let quizzesTxt = JSON.stringify(quizzes);
  await fs.writeFile(QUIZZES_FILE, quizzesTxt);
}

// test function for customer ID
function findQuiz(quizArray, quizName) {
  return quizArray.findIndex((currQuiz) => currQuiz.quizName === quizName);
}

// get gustomer by ID
export async function getByName(quizName) {
  let quizArray = await getAll();
  let index = findQuiz(quizArray, quizName);
  if (index === -1) throw new Error(`Quiz with name:${quizName} doesn't exist`);
  else return quizArray[index];
}

// create a new customer
export async function add(newQuiz) {
  let quizArray = await getAll();
  if (findQuiz(quizArray, newQuiz.quizName) !== -1)
    throw new Error(`Quiz with name:${newQuiz.quizName} already exists`);
  quizArray.push(newQuiz);
  await save(quizArray);
}

// update existing customer
export async function update(quizName, quiz) {
  let quizArray = await getAll();
  let index = findQuiz(quizArray, quizName); // findIndex
  if (index === -1) throw new Error(`Quiz with name:${quizName} doesn't exist`);
  else {
    quizArray[index] = quiz;
    await save(quizArray);
  }
}

// delete existing customer
export async function remove(quizName) {
  let quizArray = await getAll();
  let index = findCustomer(quizArray, quizName); // findIndex
  if (index === -1) throw new Error(`Quiz with name:${quizName} doesn't exist`);
  else {
    quizArray.splice(index, 1); // remove customer from array
    await save(quizArray);
  }
}
