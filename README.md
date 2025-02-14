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

### User or Agent message check

```sh
pnpm start
```

### JSON Response Example

```sh
pnpm emailValidator

curl -X POST "http://127.0.0.1:3000/validate" \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com"}'
## {"result":true}

curl -X POST "http://127.0.0.1:3000/validate" \
-H "Content-Type: application/json" \
-d '{"email": "test@...com"}'
## {"result":false,"reason":"The domain name '...' is not valid."}
```

### Cosine Similarity Example

```sh
pnpm cosineSimilarity
```
