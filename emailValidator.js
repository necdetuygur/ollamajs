import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";

const validateEmailWithOllama = async (email) => {
  const prompt = `Check if this is a valid email address. If invalid, explain why in one short sentence. Format the response as JSON: {"result": true} or {"result": false, "reason": "explanation"}. Email: ${email}`;

  try {
    const response = await axios.post(OLLAMA_URL, {
      model: "granite3-dense:2b",
      prompt: prompt,
      stream: false,
    });

    return JSON.parse(response.data.response.trim());
  } catch (error) {
    console.error("Ollama API error:", error.message);
    return { result: false, reason: "Ollama API error" };
  }
};

app.post("/validate", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ result: false, reason: "Email is required" });
  }

  const validationResult = await validateEmailWithOllama(email);
  res.json(validationResult);
});

app.listen(PORT, () => {
  console.log(`
Server is running on http://127.0.0.1${PORT}

curl -X POST "http://127.0.0.1:3000/validate" \\
-H "Content-Type: application/json" \\
-d '{"email": "test@example.com"}'
## {"result":true}

curl -X POST "http://127.0.0.1:3000/validate" \\
-H "Content-Type: application/json" \\
-d '{"email": "test@...com"}'
## {"result":false,"reason":"The domain name '...' is not valid."}
    `);
});
