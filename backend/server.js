const express = require("express");
const dotenv = require("dotenv");
// const notes = require("./data/notes");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRouters");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

// app.get("/api/user", (req, res) => {
//   res.json(notes);
// });

app.get("/", (req, res) => {
  res.send("API is Running.....");
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/user/:id", (req, res) => {
  const note = notes.find((t) => t._id == req.params.id);
  res.send(note);
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is on port ${PORT}`));
