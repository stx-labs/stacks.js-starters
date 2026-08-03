# Stacks.js + Next.js Starter

A [Next.js](https://nextjs.org) (App Router, JavaScript) starter wired up with
[Stacks.js](https://docs.hiro.so/stacks.js).

## What it demonstrates

- `app/components/useStacks.js` — connect/disconnect and read the connected STX
  address via `connect()`, `disconnect()`, `isConnected()`, `getLocalStorage()`
  from `@stacks/connect` v8.
- `app/components/ConnectWallet.js` — wallet connect UI and address display.
- `app/components/ContractCallVote.js` — a testnet contract call with
  `request("stx_callContract", …)` and `Cl` helpers from `@stacks/transactions`.

## Getting Started

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
```

## Learn More

- [Stacks.js documentation](https://docs.hiro.so/stacks.js)
