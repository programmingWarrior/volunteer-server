const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 5000;
const pass = "volunteerPass";

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://volunteer:volunteerPass@cluster0.bnrsn.mongodb.net/Volunteer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect((err) => {
  const collection = client.db("Volunteer").collection("volunteerTask");
  console.log("database connected");

  app.post("/addTask",(req, res) => {
      const newTask = req.body;
      console.log(newTask);
  })
  
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
