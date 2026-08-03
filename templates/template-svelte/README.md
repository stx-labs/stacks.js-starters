# Svelte + Vite + Stacks.js

A minimal Svelte 5 starter wired up with `@stacks/connect` v8 and `@stacks/transactions` v7.

- `src/lib/stacks.svelte.js` — shared runes-based wallet state built on `connect()`, `disconnect()`, `isConnected()`, and `getLocalStorage()`
- `src/components/ConnectWallet.svelte` — connect/disconnect button and the connected STX address
- `src/components/ContractVote.svelte` — example contract call via `request('stx_callContract', ...)` using `Cl` helpers

## Run

```sh
npm install
npm run dev
npm run build
```

Docs: https://docs.hiro.so/stacks.js
