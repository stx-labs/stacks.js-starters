import { connect, disconnect, getLocalStorage, isConnected } from '@stacks/connect'
import { ref } from 'vue'

/** The network used by this starter (Stacks.js v7 accepts plain network names). */
export const NETWORK = 'testnet'

/** Reactive connection state, kept in sync with `@stacks/connect` local storage. */
export const connected = ref(isConnected())
export const stxAddress = ref(readStxAddress())

function readStxAddress(): string | undefined {
  return getLocalStorage()?.addresses?.stx?.[0]?.address
}

function sync() {
  connected.value = isConnected()
  stxAddress.value = readStxAddress()
}

/** Opens the wallet selector and requests the user's addresses. */
export async function connectWallet() {
  await connect() // caches the addresses in local storage
  sync()
}

/** Clears the cached addresses and the selected wallet. */
export function disconnectWallet() {
  disconnect()
  sync()
}

/** Opens a transaction in the Hiro explorer. */
export function openExplorer(txid: string) {
  window.open(`https://explorer.hiro.so/txid/${txid}?chain=${NETWORK}`, '_blank')?.focus()
}
