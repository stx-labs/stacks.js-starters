import { useCallback, useEffect, useState } from 'react'
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from '@stacks/connect'

/** Reads the STX address cached in local storage by `connect()`. */
function readStxAddress() {
  return getLocalStorage()?.addresses?.stx?.[0]?.address
}

/**
 * Minimal wallet state hook built on plain `@stacks/connect` (v8).
 * No provider/context needed — `connect()` caches the address in local storage.
 */
export function useWallet() {
  const [connected, setConnected] = useState(() => isConnected())
  const [address, setAddress] = useState(readStxAddress)

  const sync = useCallback(() => {
    setConnected(isConnected())
    setAddress(readStxAddress())
  }, [])

  useEffect(() => {
    // keep multiple tabs/components in sync
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [sync])

  const login = useCallback(async () => {
    await connect()
    sync()
  }, [sync])

  const logout = useCallback(() => {
    disconnect()
    sync()
  }, [sync])

  return { connected, address, login, logout }
}
