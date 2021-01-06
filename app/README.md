# ESLINT:

After editing .eslintrc or .eslintignore cache is automatically burst (configured in webpack) by eslintCacheIdentifier:

```
const eslintCacheIdentifier = JSON.stringify(
  fs.statSync(paths.eslintRc).mtimeMs + fs.statSync(paths.eslintIgnore).mtimeMs
);
```

# CODEGEN:

npm run generate -> generates schema types in src/\_generated
