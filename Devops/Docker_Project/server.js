const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3030;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// MongoDB connection
const MONGO_URL =
  "mongodb://delta_admin:delta_password@localhost:27017";
const client = new MongoClient(MONGO_URL);

// ✅ GET all users
app.get("/getUsers", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db("my-sample-db");
    const data = await db.collection("users").find({}).toArray();

    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    await client.close();
  }
});

// ✅ POST new user
app.post("/addUser", async (req, res) => {
  try {
    const userObj = req.body;

    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db("my-sample-db");
    const result = await db.collection("users").insertOne(userObj);

    console.log("Data inserted in DB", result);
    res.send("User added successfully");
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    await client.close();
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
