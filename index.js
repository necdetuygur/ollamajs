import { Ollama } from "ollama";
import dotenv from "dotenv";
import readline from "readline";
import { select } from "@inquirer/prompts";

dotenv.config();

const OLLAMA_URL = process.env.OLLAMA_URL || "http://127.0.0.1:11434";
const INITIAL_TEXT = process.env.INITIAL_TEXT || "Sadece Türkçe cevap ver!";
const ollama = new Ollama({ host: OLLAMA_URL });

let model = "granite3-dense:2b";
try {
  const ais = (await ollama.list()).models.map((item) => ({
    name: item.name,
    value: item.name,
  }));
  model = await select({
    message: "Select AI model",
    choices: [...ais],
  });
} catch (error) {}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", async (input) => {
  try {
    const response = await ollama.chat({
      model: model,
      messages: [
        { role: "system", content: INITIAL_TEXT },
        { role: "user", content: input },
      ],
      stream: true,
    });

    for await (const part of response) {
      process.stdout.write(part.message.content);
    }

    process.stdout.write("\n\n> ");
  } catch (error) {
    console.error("Error during chat:", error);
  }
});

console.log(
  'Type your message and press "Enter".\nUse "CTRL + C" to exit the program.',
);
process.stdout.write("\n> ");
