import { connect, disconnect, getLocalStorage, isConnected } from '@stacks/connect'

/** The network used by this starter for all wallet requests. */
export const NETWORK = 'testnet'

/** Reactive wallet state, shared by all components. */
export const wallet = $state({
  connected: isConnected(),
  stxAddress: currentStxAddress(),
})

/** Reads the address `connect()` cached in local storage (`null` if not connected). */
function currentStxAddress() {
  return getLocalStorage()?.addresses?.stx?.[0]?.address ?? null
}

function sync() {
  wallet.connected = isConnected()
  wallet.stxAddress = currentStxAddress()
}

/** Opens the wallet selector and requests the user's addresses. */
export async function connectWallet() {
  await connect()
  sync()
}

/** Clears the cached connection and selected wallet. */
export function disconnectWallet() {
  disconnect()
  sync()
}
