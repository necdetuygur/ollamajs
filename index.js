import { Ollama } from "ollama";
import dotenv from "dotenv";

dotenv.config();

const OLLAMA_URL = process.env.OLLAMA_URL || "http://127.0.0.1:11434";
const ollama = new Ollama({ host: OLLAMA_URL });

// User
console.log(
  await ollama.chat({
    model: "deepseek-r1:1.5b",
    messages: [
      {
        role: "user",
        content: "Hello",
      },
    ],
  }),
);

// Agent
console.log(
  await ollama.chat({
    model: "granite3-dense:2b",
    messages: [
      {
        role: "agent",
        content: "Hello",
      },
    ],
  }),
);
