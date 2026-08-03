// Shared Stacks helpers for this demo.
//
// @stacks/connect v8 has no provider or `UserSession` class anymore. Instead it
// exposes a small set of functions that read/write the connection state in
// local storage, plus a single `request(method, params)` entry point for every
// wallet interaction.
import { getLocalStorage } from "@stacks/connect";

/** All examples in this starter run against the Stacks testnet. */
export const NETWORK = "testnet";

/**
 * The connected STX address.
 *
 * For security reasons v8 only returns the address of the network currently
 * selected in the wallet — there is no more `.profile.stxAddress.testnet`.
 */
export function getStxAddress() {
  return getLocalStorage()?.addresses?.stx?.[0]?.address ?? "";
}

/** `SP123…4567` style display helper. */
export function truncateAddress(address) {
  if (!address) return "";
  return `${address.slice(0, 4)}…${address.slice(-4)}`;
}

/** Link a txid to the Stacks Explorer. */
export function explorerTxUrl(txid) {
  return `https://explorer.hiro.so/txid/${txid}?chain=${NETWORK}`;
}
