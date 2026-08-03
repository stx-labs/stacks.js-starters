import { Component, inject } from '@angular/core';
import { StacksService } from '../stacks.service';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.html',
  styleUrl: './connect-wallet.css',
})
export class ConnectWallet {
  protected readonly stacks = inject(StacksService);

  connect(): void {
    void this.stacks.connectWallet();
  }

  disconnect(): void {
    this.stacks.disconnectWallet();
  }
}
