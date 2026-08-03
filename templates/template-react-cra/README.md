# Create React App + Stacks.js

A minimal [Create React App](https://github.com/facebook/create-react-app) starter wired up with
[Stacks.js](https://github.com/hirosystems/stacks.js).

It demonstrates:

- **`src/components/ConnectWallet.js`** — connecting a wallet with `connect()` and reading the
  connected STX address from `getLocalStorage()`, plus `disconnect()` / `isConnected()`.
- **`src/components/ContractCallVote.js`** — a testnet contract call via
  `request("stx_callContract", …)`, opening the resulting transaction in the Hiro explorer.

`@stacks/connect` v8 replaces the older `showConnect`/`openContractCall`/`UserSession` APIs with
`connect()` and `request()` — there is no provider component to wrap your app in, and no
`@stacks/connect-react`; call the functions directly. It only returns the address for the wallet's
currently selected network, so the UI shows a single STX address.

## Run

```sh
npm install
npm run dev    # http://localhost:3000
npm run build
```

## Docs

[Stacks.js documentation](https://docs.hiro.so/stacks.js)
