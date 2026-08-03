import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnectWallet } from './connect-wallet/connect-wallet';
import { ContractVote } from './contract-vote/contract-vote';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConnectWallet, ContractVote],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
