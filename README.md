### Dependencies

```sh
OLLAMA_HOST="0.0.0.0:11434" OLLAMA_ORIGINS="*" ollama serve
ollama pull granite3-dense:2b
ollama pull deepseek-r1:1.5b
npm i -g pnpm
pnpm i
```

### User or Agent message check

```sh
pnpm start
```

### JSON response example

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
