import express from "express";
import cors from "cors"
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // restrict calls to those this address
    methods: "GET" // only allow GET requests
  })
);

import {customerRouter} from "./customers/customer.route";
import {quizzesRouter} from "./quizzes/quizzes.route";
const app1 = express();
const PORT = 4000;

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads.
app.use(express.json());

// paths handled by quizzesRouter
app.use(customerRouter)

// new addition!
// paths handled by quizzesRouter
app.use(quizzesRouter)

app.get("/", (req, res) => res.send("Server 4: Hello World!"));


// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

app.listen(PORT, function () {
   console.log("Server listening on Port", PORT);
});
