// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ RapidAPI Proxy Secret (from your Gateway)
const ALLOWED_SECRET = "c8e2c210-490a-11f0-b407-edc30bed2acc";

// ✅ Middleware to allow only RapidAPI requests in production
app.use((req, res, next) => {
  const incomingSecret = req.headers['x-rapidapi-proxy-secret'];

  // Skip check in non-production (optional for local dev)
  if (process.env.NODE_ENV !== "production") return next();

  if (incomingSecret !== ALLOWED_SECRET) {
    return res.status(403).json({ error: "Forbidden. Invalid source." });
  }

  next();
});

app.use(cors());

// 📚 Sample quotes
const quotes = [
  { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving." },
  { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
  { author: "Abraham Lincoln", quote: "Whatever you are, be a good one." },
  { author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." }
];

// ✅ Health check
app.get("/ping", (req, res) => {
  res.status(200).json({ status: "ok", message: "API is healthy" });
});

// 🎯 Get random quote
app.get("/quote", (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json(quotes[random]);
});

// 🧠 Get quote by author
app.get("/quote/by-author", (req, res) => {
  const { author } = req.query;
  if (!author) {
    return res.status(400).json({ error: "Author query parameter is required" });
  }

  const found = quotes.find(q => q.author.toLowerCase() === author.toLowerCase());
  if (found) {
    return res.json(found);
  } else {
    return res.status(404).json({ error: `No quote found for author "${author}"` });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
