import { Ollama } from "ollama";
import dotenv from "dotenv";
import * as math from "mathjs";

dotenv.config();

const OLLAMA_URL = process.env.OLLAMA_URL || "http://127.0.0.1:11434";
const ollama = new Ollama({ host: OLLAMA_URL });

const getEmbedding = async (prompt) => {
  const response = await ollama.embeddings({
    model: "nomic-embed-text",
    prompt: prompt,
  });
  return response.embedding;
};

const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = math.dot(vecA, vecB);
  const magnitudeA = math.norm(vecA);
  const magnitudeB = math.norm(vecB);
  return dotProduct / (magnitudeA * magnitudeB);
};

(async () => {
  const redCat = await getEmbedding("red cat");
  const redCar = await getEmbedding("red car");
  const redApple = await getEmbedding("red apple");
  const redPear = await getEmbedding("red pear");
  const yellowPear = await getEmbedding("yellow pear");
  const black = await getEmbedding("black");
  const white = await getEmbedding("white");
  const up = await getEmbedding("up");
  const down = await getEmbedding("down");

  console.log("Red Cat vs Red Car:", cosineSimilarity(redCat, redCar));
  console.log("Red Cat vs Red Apple:", cosineSimilarity(redCat, redApple));
  console.log("Red Car vs Red Apple:", cosineSimilarity(redCar, redApple));
  console.log("Red vs Yellow Pear:", cosineSimilarity(redPear, yellowPear));
  console.log(
    "Red Apple vs Yellow Pear:",
    cosineSimilarity(redApple, yellowPear),
  );
  console.log("Black vs White:", cosineSimilarity(black, white));
  console.log("Up vs Down:", cosineSimilarity(up, down));
})();
