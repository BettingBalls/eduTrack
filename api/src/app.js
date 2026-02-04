const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

// Register endpoint
app.post("/register", (req, res) => {
  const { username, password, phone} = req.body;

  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: "Username sudah terdaftar." });
  }

  users.push({ id: Date.now(), username, password, phone, });
  res.json({ message: "Registrasi berhasil." });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: "Username atau password salah." });
  }
  res.json({ message: "Login berhasil.", user });
});

// Get endpoint
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
})
