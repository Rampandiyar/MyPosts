const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");
const cors = require("cors");

const app = express();
mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3001;
const CONNECTION = process.env.CONNECTION;

app.get("/api/Viewpost", async (req, res) => {
  try {
    const result = await Post.find();
    res.json({ customers: result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/", (req, res) => {
  res.send("This is a post request!");
});

app.post("/api/addPost", async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    res.status(201).json({ customer: post });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

const start = async () => {
  try {
    await mongoose.connect(CONNECTION);

    app.listen(PORT, () => {
      console.log("App listening on port " + PORT);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
