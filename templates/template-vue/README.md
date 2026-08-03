# Stacks.js + Vue 3 + Vite

A minimal starter showing how to use [Stacks.js](https://docs.hiro.so/stacks.js) in a Vue 3 app.

It demonstrates:

- Wallet connect / disconnect via `connect()`, `disconnect()`, `isConnected()`, `getLocalStorage()` (`src/stacks.js`, `src/components/StacksConnectWallet.vue`)
- Displaying the connected STX address
- A contract call with `request('stx_callContract', …)` and Clarity values from `@stacks/transactions`, linked to the Hiro Explorer (`src/components/StacksContractVote.vue`)

The contract call votes for a fruit on the testnet contract
`ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract`.

## Run

```sh
npm install
npm run dev
npm run build
```
