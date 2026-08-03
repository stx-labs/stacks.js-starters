import { Injectable, signal } from '@angular/core';
import { connect, disconnect, getLocalStorage, isConnected } from '@stacks/connect';

/**
 * Small wrapper around `@stacks/connect` (v8+) that exposes the wallet
 * connection state as Angular signals, so templates update automatically.
 */
@Injectable({ providedIn: 'root' })
export class StacksService {
  /** Whether a wallet is currently connected. */
  readonly connected = signal(isConnected());

  /** The connected STX address (current network only in Connect v8). */
  readonly stxAddress = signal(readStxAddress());

  async connectWallet(): Promise<void> {
    await connect(); // caches the addresses in local storage
    this.sync();
  }

  disconnectWallet(): void {
    disconnect(); // clears local storage and the selected wallet
    this.sync();
  }

  private sync(): void {
    this.connected.set(isConnected());
    this.stxAddress.set(readStxAddress());
  }
}

function readStxAddress(): string | undefined {
  return getLocalStorage()?.addresses?.stx?.[0]?.address;
}
