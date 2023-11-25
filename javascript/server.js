const express = require("express");
const app = express();
const PORT = 3000;

// Simple endpoint
app.get("/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
});

// Simple endpoint
app.get("/pmessage", (req, res) => {
  res.json({ message: `${process.env.message}` });
});

// Simple endpoint
app.get("/psecretmessage", (req, res) => {
  res.json({ message: `${process.env.secretmessage}` });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//test