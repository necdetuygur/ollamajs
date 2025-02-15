### Dependencies

```sh
OLLAMA_HOST="0.0.0.0:11434" OLLAMA_ORIGINS="*" ollama serve

# Optional
ollama pull all-minilm:33m
ollama pull codellama:7b
ollama pull deepseek-r1:1.5b
ollama pull gemma:2b
ollama pull gemma2:2b
ollama pull granite-embedding:30m
ollama pull granite3-dense:2b
ollama pull mistral:latest
ollama pull mxbai-embed-large:latest
ollama pull nomic-embed-text:latest
ollama pull qwen2.5:3b
ollama pull starcoder2:3b

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
