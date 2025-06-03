import { Component, OnInit } from '@angular/core';
import { isConnected, request } from '@stacks/connect';
import { Cl } from '@stacks/transactions';

@Component({
  selector: 'app-contract-vote',
  templateUrl: './contract-vote.component.html',
  styleUrls: ['./contract-vote.component.css'],
})
export class ContractVoteComponent implements OnInit {
  connected = false;

  constructor() {}

  ngOnInit(): void {
    this.connected = isConnected();
  }

  async vote(pick: string) {
    try {
      const result = await request('stx_callContract', {
        contract:
          'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract',
        functionName: 'vote',
        functionArgs: [Cl.stringUtf8(pick)],
        postConditions: [],
        postConditionMode: 'deny',
      });
      console.log('result:', result);
      window
        .open(
          `https://explorer.hiro.so/txid/${result.txid}?chain=testnet`,
          '_blank'
        )
        ?.focus();
    } catch (e) {
      console.error(e);
    }
  }
}
