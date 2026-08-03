# Stacks.js + Next.js (TypeScript) Starter

A Next.js (App Router, TypeScript) starter wired up with Stacks.js.

Demonstrates:

- `app/components/ConnectWallet.tsx` — connect/disconnect a Stacks wallet with
  `connect()` / `disconnect()` and display the connected STX address.
- `app/hooks/useStacksAddress.ts` — read the connected address from local storage
  via `isConnected()` / `getLocalStorage()`.
- `app/components/ContractCallVote.tsx` — a testnet contract call using
  `request("stx_callContract", …)` and `Cl` helpers from `@stacks/transactions`.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
```

## Docs

- [Stacks.js Documentation](https://docs.hiro.so/stacks.js)
