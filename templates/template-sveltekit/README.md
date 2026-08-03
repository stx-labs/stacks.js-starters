# SvelteKit + Stacks.js

A minimal SvelteKit (Svelte 5) starter demonstrating wallet connect/disconnect, the connected STX
address, and a Clarity contract call (`stx_callContract`) on testnet.

- `src/lib/stacks.svelte.js` — reactive wallet state (runes)
- `src/lib/ConnectWallet.svelte` — connect/disconnect button and STX address
- `src/lib/ContractVote.svelte` — contract-call example

## Run

```sh
npm install
npm run dev
npm run build
```

Docs: [docs.hiro.so/stacks.js](https://docs.hiro.so/stacks.js)
