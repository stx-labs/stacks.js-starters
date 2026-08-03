import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from '@stacks/connect'

/** Network the demo transactions are sent to. */
export const NETWORK = 'testnet'

/** Reactive wallet state, shared across components. */
class Wallet {
  connected: boolean = $state(isConnected())
  /** The connected STX address of the current network (or `undefined`). */
  stxAddress: string | undefined = $state(readStxAddress())

  async connect() {
    await connect() // opens the wallet selector and caches addresses in local storage
    this.sync()
  }

  disconnect() {
    disconnect() // clears local storage and the selected wallet
    this.sync()
  }

  sync() {
    this.connected = isConnected()
    this.stxAddress = readStxAddress()
  }
}

function readStxAddress(): string | undefined {
  return getLocalStorage()?.addresses.stx?.[0]?.address
}

export const wallet = new Wallet()
