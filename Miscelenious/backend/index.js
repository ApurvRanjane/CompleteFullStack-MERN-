const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ✅ Handle GET request (works fine without middleware)
app.get("/register", (req, res) => {
  const { username, password } = req.query;
  res.send(`This is GET method. Welcome ${username}, your password is ${password}!!!`);
});

// ⚠️ POST request will not work properly without middleware
app.post("/register", (req, res) => {
    let {username,password}=req.body;
  res.send(`This is POST method. Welcome ${username}, your password is ${password}!!`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
