import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
// this is the standard middleware for CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

// this is the standard middleware for parsing JSON requests
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello this is the Backend of Istriwala APP");
});
//routes  import

export default app;
