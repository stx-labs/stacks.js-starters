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
  address = '';

  constructor() {}

  ngOnInit(): void {
    this.updateState();
  }

  updateState() {
    this.connected = isConnected();
    const storage = getLocalStorage();
    if (this.connected && storage && storage.addresses?.stx?.[0]?.address) {
      this.address = storage.addresses.stx[0].address;
    }
  }

  async authenticate() {
    await connect({
      network: 'testnet',
    });
    this.updateState();
  }

  handleDisconnect() {
    disconnect();
    this.updateState();
  }
}
