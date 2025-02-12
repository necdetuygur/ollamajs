import ollama from "ollama";

console.log(
  await ollama.chat({
    model: "granite3-dense:2b",
    messages: [
      {
        role: "user",
        content: "Hello",
      },
    ],
  }),
);

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
