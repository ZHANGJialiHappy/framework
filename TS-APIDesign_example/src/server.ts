import express from "express";

import {customerRouter} from "./customers/customer.route";
import {quizzesRouter} from "./quizzes/quizzes.route";
const app = express();
const PORT = 3000;

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads.
app.use(express.json());

// paths handled by quizzesRouter
app.use(customerRouter)

// new addition!
// paths handled by quizzesRouter
app.use(quizzesRouter)

app.get("/", (req, res) => res.send("Server 3: Hello World!"));


// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

app.listen(PORT, function () {
   console.log("Server listening on Port", PORT);
});
