# Vue 3 + TypeScript + Vite + Stacks.js

A minimal starter showing how to use [Stacks.js](https://docs.hiro.so/stacks.js) in a Vue 3 app:

- `src/stacks.ts` — reactive connection state built on `@stacks/connect` (`connect`, `disconnect`, `isConnected`, `getLocalStorage`)
- `src/components/StacksConnectWallet.vue` — connect/disconnect button and the connected STX address
- `src/components/StacksContractVote.vue` — a testnet contract call via `request('stx_callContract', …)`

## Getting started

```sh
npm install
npm run dev
npm run build
```

Learn more in the [Stacks.js docs](https://docs.hiro.so/stacks.js).
