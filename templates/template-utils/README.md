# Stacks.js Utils Starter

A Create React App starter demonstrating small, copy-pasteable Stacks.js utilities:

- `src/components/ConnectWallet.js` — `connect()`, `disconnect()`, `isConnected()`, and reading the cached STX address from `getLocalStorage()` (`@stacks/connect` v8, no provider needed)
- `src/utils/01-Unit.js` — STX ⇄ microSTX conversion
- `src/utils/02-ClarityEncoder.js` — `Cl.parse`, `Cl.serialize`, `Cl.deserialize`, `Cl.prettyPrint` (`@stacks/transactions` v7)
- `src/utils/03-StxTransfer.js` — `request("stx_transferStx", …)` with a string network name (`@stacks/network` v7 no longer exports `StacksTestnet`)

## Run

```sh
npm install
npm run dev    # http://localhost:3000
npm run build
```

Docs: https://docs.hiro.so/stacks.js
