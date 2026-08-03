# React + TypeScript + Vite + Stacks.js

A minimal Vite + React starter with a [Stacks.js](https://docs.hiro.so/stacks.js) demo.

- `src/hooks/use-wallet.ts` — wallet state via `connect()`, `disconnect()`, `isConnected()`, `getLocalStorage()` from `@stacks/connect` (v8)
- `src/components/ConnectWallet.tsx` — connect/disconnect button and the connected STX address
- `src/components/ContractCallVote.tsx` — contract call via `request('stx_callContract', ...)` against an example testnet voting contract

Connect requires a Stacks wallet (e.g. [Leather](https://leather.io/) or [Xverse](https://www.xverse.app/)) installed in the browser.

## Run

```sh
npm install
npm run dev
npm run build
```
