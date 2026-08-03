# React + Vite + Stacks.js

A minimal React + Vite setup with a [Stacks.js](https://docs.hiro.so/stacks.js) demo.

- `src/hooks/use-wallet.js` — wallet state via `connect()`, `disconnect()`, `isConnected()`, and `getLocalStorage()` from `@stacks/connect` (v8)
- `src/components/ConnectWallet.jsx` — connect/disconnect button and the connected STX address
- `src/components/ContractCallVote.jsx` — contract call via `request('stx_callContract', ...)` against an example testnet voting contract

Requires a Stacks wallet (e.g. [Leather](https://leather.io/) or [Xverse](https://www.xverse.app/)) installed in the browser.

## Getting started

```sh
npm install
npm run dev
npm run build
```
