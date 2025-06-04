import { Component, OnInit } from '@angular/core';
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from '@stacks/connect';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css'],
})
export class ConnectWalletComponent implements OnInit {
  connected = false;
  stxAddress = '';

  constructor() {}

  ngOnInit(): void {
    this.updateState();
  }

  updateState(): void {
    this.connected = isConnected();
    if (this.connected) {
      const storage = getLocalStorage();
      this.stxAddress = storage?.addresses?.stx?.[0]?.address || '';
    } else {
      this.stxAddress = '';
    }
  }

  async handleConnect(): Promise<void> {
    try {
      await connect();
      this.updateState();
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  }

  handleDisconnect(): void {
    disconnect();
    this.updateState();
  }
}
