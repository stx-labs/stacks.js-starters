import { ref } from 'vue'
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from '@stacks/connect'

/** The network all demo transactions are sent to. */
export const NETWORK = 'testnet'

/** Reactive connection state, shared by all components. */
export const connected = ref(isConnected())
export const stxAddress = ref(getStxAddress())

function getStxAddress() {
  // `connect()` caches the addresses of the current network in local storage
  return getLocalStorage()?.addresses?.stx?.[0]?.address ?? null
}

function sync() {
  connected.value = isConnected()
  stxAddress.value = getStxAddress()
}

export async function connectWallet() {
  await connect() // opens the wallet selector, then requests addresses
  sync()
}

export function disconnectWallet() {
  disconnect() // clears local storage and the selected wallet
  sync()
}

export function explorerUrl(txid) {
  return `https://explorer.hiro.so/txid/${txid}?chain=${NETWORK}`
}
