### Dependencies

```sh
OLLAMA_HOST="0.0.0.0:11434" OLLAMA_ORIGINS="*" ollama serve
ollama pull gemma2:2b # Optional.
ollama pull qwen2.5:3b # Optional.
ollama pull starcoder2:3b # Optional.
ollama pull gemma:2b # Optional.
ollama pull codellama:7b # Optional.
ollama pull mistral:latest # Optional.
ollama pull nomic-embed-text:latest # Optional.
ollama pull deepseek-r1:1.5b # Optional.
ollama pull granite3-dense:2b # Optional.
ollama pull mxbai-embed-large:latest # Optional.
ollama pull granite-embedding:30m # Optional.
ollama pull all-minilm:33m # Optional.
npm i -g pnpm
pnpm i
```

### Environment

```sh
cp .env.example .env
```

### Available Command Scripts

```sh
pnpm start # Start chatbox.
pnpm chat # Start chatbox.
pnpm checkUserAgent # Start check user agent test.
pnpm emailValidator # Start email validator test.
pnpm cosineSimilarity # Start cosine similarity test.
```
