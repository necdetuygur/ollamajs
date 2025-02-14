### Dependencies

```sh
OLLAMA_HOST="0.0.0.0:11434" OLLAMA_ORIGINS="*" ollama serve
ollama pull granite3-dense:2b # optional
ollama pull deepseek-r1:1.5b # optional
ollama pull nomic-embed-text # optional
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
