# SvelteKit + Stacks.js (TypeScript)

A minimal SvelteKit (Svelte 5) starter showing how to connect a Stacks wallet with
`@stacks/connect` v8 and call a Clarity smart contract function.

- `src/lib/stacks.svelte.ts` — reactive wallet state (`connect`, `disconnect`, `isConnected`, `getLocalStorage`)
- `src/lib/ConnectWallet.svelte` — connect/disconnect button and the connected STX address
- `src/lib/ContractVote.svelte` — `request('stx_callContract', …)` example on testnet

## Usage

```sh
npm install
npm run dev
npm run build
```

See the [Stacks.js documentation](https://docs.hiro.so/stacks.js) for more.
