
# 📚 Quote of the Day API

A simple RESTful API that returns random inspirational quotes, built with Node.js and Express. Perfect for integration into websites, mobile apps, widgets, or daily motivation tools.

---

## 🚀 Live API

**Base URL:**  
`https://rapidapi-test.onrender.com`

### 📥 Endpoint

**GET `/quote`**  
Returns a random inspirational quote in JSON format.

#### ✅ Sample Response

```json
{
  "author": "Albert Einstein",
  "quote": "Life is like riding a bicycle. To keep your balance you must keep moving."
}
````

---

## 🩺 Health Check

**GET `/ping`**
Returns a simple health response to confirm the server is up.

#### ✅ Response

```json
{
  "status": "ok",
  "message": "API is healthy"
}
```

---

## ⚙️ Setup for Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/SubbuSynxaIt/rapidapi_test.git
cd rapidapi_test
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node server.js
```

The server runs at:
`http://localhost:3000`

---

## 🌐 Deploying to Render

1. Push your code to GitHub.
2. Go to [Render](https://render.com).
3. Click **"New Web Service"**.
4. Connect your GitHub repository.
5. Configure:

   * **Build Command**: `npm install`
   * **Start Command**: `node server.js`
   * **Environment**: Node.js (version >= 14)
6. Render will deploy and provide a public URL like:
   `https://rapidapi-test.onrender.com`

---

## 📡 Publishing on RapidAPI

1. Create a free account at [RapidAPI](https://rapidapi.com)
2. Go to **My APIs** → **Add API** → Choose **REST API**
3. Set:

   * **Base URL**: `https://rapidapi-test.onrender.com`
   * Add endpoint `/quote` as **GET** method
4. Under **"Health Check"**, use `/ping` or `/quote`
5. Link this README using:

   * **External Doc URL**:
     `https://github.com/SubbuSynxaIt/rapidapi_test#readme`
   * **External Doc Description**:
     `View GitHub README`

---

## 🤝 Contributing

Pull requests and suggestions are welcome!
Feel free to fork the repo and submit improvements.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

````

---


- Commit and push:

```bash
git add README.md
git commit -m "Add full README for Quote API"
git push origin main
````


