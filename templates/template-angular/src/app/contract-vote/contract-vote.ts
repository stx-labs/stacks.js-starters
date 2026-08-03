import { Component, inject } from '@angular/core';
import { request } from '@stacks/connect';
import { Cl } from '@stacks/transactions';
import { StacksService } from '../stacks.service';

const CONTRACT = 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract';

@Component({
  selector: 'app-contract-vote',
  templateUrl: './contract-vote.html',
  styleUrl: './contract-vote.css',
})
export class ContractVote {
  protected readonly stacks = inject(StacksService);

  async vote(pick: string): Promise<void> {
    try {
      const response = await request('stx_callContract', {
        contract: CONTRACT,
        functionName: 'vote',
        functionArgs: [Cl.stringUtf8(pick)],
        network: 'testnet',
      });
      console.log('txid:', response.txid);
      window
        ?.open(`https://explorer.hiro.so/txid/${response.txid}?chain=testnet`, '_blank')
        ?.focus();
    } catch (error) {
      console.error('Transaction was canceled or failed:', error);
    }
  }
}
