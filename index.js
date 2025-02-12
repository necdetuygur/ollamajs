import { Ollama } from "ollama";

const ollama = new Ollama({ host: "http://127.0.0.1:11434" });

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
