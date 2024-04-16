import express from "express";
// import *as  cors from "cors"
var cors = require('cors')// 
import {customerRouter} from "./customers/customer.route";
import {quizzesRouter} from "./quizzes/quizzes.route";
const app = express();
const PORT = 3000;

// const options: cors.CorsOptions = {
//   allowedHeaders: [
//     'Origin',
//     'X-Requested-With',
//     'Content-Type',
//     'Accept',
//     'X-Access-Token',
//   ],
//   credentials: true,
//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//   origin: "*",
//   preflightContinue: false,
// };

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads.
app.use(express.json());
// app.use(cors) // simple use
// 
//  CORS configuration 
// app.options('*', cors({
//   allowedHeaders: [
//     'Origin',
//     'X-Requested-With',
//     'Content-Type',
//     'Accept',
//     'X-Access-Token',
//   ],
//   credentials: false,
//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//   origin: "*",
//   preflightContinue: true,
// }))

// paths handled by quizzesRouter
app.use(customerRouter)

// new addition!
// paths handled by quizzesRouter
app.use(quizzesRouter)

app.get("/client", (req, res) => res.sendFile("client/index.html", {root: __dirname }));
app.get("/", (req, res) => res.send("Server 3: Hello World!"));


// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

app.listen(PORT, function () {
   console.log("Server listening on Port", PORT);
});
