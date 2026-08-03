# Svelte + TS + Vite + Stacks.js

A minimal Svelte 5 + TypeScript starter demonstrating [Stacks.js](https://docs.hiro.so/stacks.js): wallet connect/disconnect, showing the connected STX address, and a testnet contract call.

- `src/lib/stacks.svelte.ts` — shared reactive wallet state built on `@stacks/connect` (`connect`, `disconnect`, `isConnected`, `getLocalStorage`)
- `src/components/ConnectWallet.svelte` — connect/disconnect button and the connected STX address
- `src/components/ContractVote.svelte` — a testnet contract call via `request('stx_callContract', …)`

This template uses `@stacks/connect` v8, which is based on [SIP-030](https://github.com/janniks/sips/blob/main/sips/sip-030/sip-030-wallet-interface.md) wallet RPC methods. The legacy `showConnect`/`openContractCall`/`UserSession` APIs and the `@stacks/connect-react` package are no longer used.

> Note: for security reasons v8 only returns the address of the currently selected wallet network (previously both mainnet and testnet addresses were returned).

## Run

```sh
npm install   # install dependencies
npm run dev   # start the dev server
npm run build # production build
npm run check # type-check
```
