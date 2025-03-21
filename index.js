import express from "express";
import http from "http";
import cors from "cors";
import { connectDB } from "./dbConnect.js";

const port = 1000;

const app = express();
const server = http.createServer(app);
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for URL-encoded bodies
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json("Welcome to WomenSafety ! v2 ❤️");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
