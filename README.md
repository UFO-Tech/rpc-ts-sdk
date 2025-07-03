# @ufo-tech/rpc-ts-sdk

A CLI and library to **generate TypeScript interfaces** from an [OpenRPC JSON](https://open-rpc.org/) schema file or URL.

---

## **Features**

* Converts OpenRPC `components.schemas` into TypeScript interfaces.
* Handles `enum`, `oneOf`, `type: [...]`, arrays, references, and nested objects.
* Supports input as a local file **or** URL (via `--input`).
* Output path and file name are fully configurable.
* Always generates a base interface for RPC error handling.
* Can be used **globally** via CLI or as a programmatic import in your project.

---

## **Installation**

```sh
npm install -g @ufo-tech/rpc-ts-sdk
```

---

## **CLI Usage**

```sh
rpc-ts-sdk-gen -i <path-or-url-to-openrpc.json> -o <path-to-schemas.ts>
```

**Arguments:**

* `-i`, `--input`
  Path or URL to the OpenRPC JSON file.
  *If not provided, defaults to `openrpc.json` in your current directory.*

* `-o`, `--out`
  Path and file name for the generated TypeScript interfaces file.
  *If not provided, defaults to `schemas.ts` in your current directory.*

### **Examples**

**From local file:**

```sh
rpc-ts-sdk-gen -i ./openrpc.json -o ./types/openrpc-interfaces.ts
```

**From URL:**

```sh
rpc-ts-sdk-gen --input https://example.com/openrpc.json --out ./src/api/interfaces.ts
```

**Default usage (with defaults):**

```sh
rpc-ts-sdk-gen
```

---

## **Generated Output**

* TypeScript interfaces for every schema in `components.schemas`
* Accurate support for union types, enums, nullable fields, arrays, and object nesting.
* Always includes a basic error interface:

  ```ts
  export interface RpcError {
    code: number;
    message: string;
    data?: any;
  }
  ```

---

## **Library (Programmatic) Usage**

You can use the generator as a library in your own Node/TypeScript project:

```ts
import { generateSchemas } from '@ufo-tech/rpc-ts-sdk';

await generateSchemas({
  input: './openrpc.json', // Can also be a URL
  output: './types/schemas.ts'
});
```

---

## **How it works**

1. Parses the OpenRPC JSON schema from a file or URL.
2. Processes all entries in `components.schemas` to generate accurate TypeScript interfaces.
3. Handles advanced OpenRPC/JSON Schema features:

    * `enum` → union types
    * `oneOf`, `anyOf` → TypeScript unions
    * Arrays, nested objects, references (`$ref`)
    * `null`/nullable fields
4. Removes duplicate union types (`number | number` → `number`).
5. Appends a base error interface for use in RPC error handling.

---

## **When to use**

* **Backend/Frontend fullstack** teams who want strongly-typed contracts with OpenRPC-compatible APIs.
* Rapid TypeScript DTO/model generation from OpenRPC/OpenAPI/JSON-schema-like contracts.
* Automated SDK/type updates when your OpenRPC spec changes.

---

## **Best Practices & Recommendations**

* Keep your OpenRPC schema up to date with your backend API.
* Generate interfaces as part of your build or deploy process for always up-to-date types.
* Consider ignoring the generated file in git if it’s auto-generated (`schemas.ts`).

---

## **License**

MIT

---

## **Troubleshooting**

* **`Error: No components.schemas found!`**
  Ensure your OpenRPC JSON has a valid `components.schemas` section.

* **`Error: Cannot find module` or "file not found"**
  Double-check your `-i`/`--input` and `-o`/`--out` paths.

* **Want to contribute?**
  Fork the repo, submit a pull request, or open an issue for bugs and feature requests!

---

## **Links**

* [OpenRPC Specification](https://spec.open-rpc.org/)
* [UFO Tech](https://docs.ufo-tech.space/bin/view/docs/)

---

**Questions or feedback?
Create an issue on GitHub or contact the UFO Tech team.**
