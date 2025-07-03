# @ufo-tech/rpc-ts-sdk

Генерує TypeScript інтерфейси з openrpc.json

## Встановлення глобально

```sh
npm i -g @ufo-tech/rpc-ts-sdk
````

## Використання

```sh
rpc-ts-sdk-gen -i ./openrpc.json -o ./schemas.ts
```

* `-i` або `--input` — шлях або URL до openrpc.json
* `-o` або `--out` — шлях для файлу з інтерфейсами

