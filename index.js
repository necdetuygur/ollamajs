import { Ollama } from "ollama";
import dotenv from "dotenv";

dotenv.config();

const OLLAMA_URL = process.env.OLLAMA_URL || "http://127.0.0.1:11434";
const ollama = new Ollama({ host: OLLAMA_URL });

// Embedding
try {
  console.log(
    await ollama.embeddings({
      model: "nomic-embed-text",
      prompt: "The sky is blue because of rayleigh scattering",
    }),
  );
} catch (error) {
  console.log(error);
}

// User
try {
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
} catch (error) {
  console.log(error);
}

// Agent
try {
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
} catch (error) {
  console.log(error);
}
