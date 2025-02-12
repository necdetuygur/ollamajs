### Dependencies

```sh
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

curl -X POST "http://127.0.0.13000/validate" \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com"}'
## {"result":true}

curl -X POST "http://127.0.0.13000/validate" \
-H "Content-Type: application/json" \
-d '{"email": "test@...com"}'
## {"result":false,"reason":"The domain name '...' is not valid."}
```
