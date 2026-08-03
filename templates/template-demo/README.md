# Stacks.js Demo

A Create React App starter demonstrating the basics of Stacks.js, one tab per
feature in `src/tabs/`:

| Tab                  | File                           | Stacks.js API                                    |
| -------------------- | ------------------------------ | ------------------------------------------------ |
| Connect Wallet       | `src/tabs/ConnectWallet.js`    | `connect()`, `disconnect()`, `getLocalStorage()` |
| Contract Interaction | `src/tabs/ContractCallVote.js` | `request("stx_callContract")`, read-only fetch   |
| STX Transfer         | `src/tabs/StxTransfer.js`      | `request("stx_transferStx")`                     |
| Message Signing      | `src/tabs/SignMessage.js`      | `request("stx_signMessage")`                     |

Everything targets the Stacks `testnet`. Get free testnet STX from the
[explorer faucet](https://explorer.hiro.so/sandbox/faucet?chain=testnet).

> Uses `@stacks/connect` v8: no provider component and no `UserSession` — all
> wallet interactions go through `request(method, params)`.

## Run

```sh
npm install
npm run dev    # http://localhost:3000
npm run build
```

## Docs

[Stacks.js documentation](https://docs.hiro.so/stacks.js)
