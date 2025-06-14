// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const quotes = [
  { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving." },
  { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
  { author: "Abraham Lincoln", quote: "Whatever you are, be a good one." },
  { author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." }
];
app.get("/ping", (req, res) => {
    res.status(200).json({ status: "ok", message: "API is healthy" });
  });
  
// API endpoint
app.get("/quote", (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json(quotes[random]);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
