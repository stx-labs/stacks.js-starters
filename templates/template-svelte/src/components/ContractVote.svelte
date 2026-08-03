<script>
  import { request } from '@stacks/connect'
  import { Cl } from '@stacks/transactions'
  import { wallet, NETWORK } from '../lib/stacks.svelte.js'

  const CONTRACT = 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract'

  /** @param {string} pick */
  async function vote(pick) {
    try {
      const response = await request('stx_callContract', {
        contract: CONTRACT,
        functionName: 'vote',
        functionArgs: [Cl.stringUtf8(pick)],
        network: NETWORK,
      })
      console.log('contract call:', response)
      window
        .open(`https://explorer.hiro.so/txid/${response.txid}?chain=${NETWORK}`, '_blank')
        ?.focus()
    } catch (error) {
      console.log('contract call canceled or failed:', error)
    }
  }
</script>

{#if wallet.connected}
  <div class="stacks-block">
    <p>Vote via smart contract</p>
    <div class="row">
      <button type="button" onclick={() => vote('🍊')}>Vote for 🍊</button>
      <button type="button" onclick={() => vote('🍎')}>Vote for 🍎</button>
    </div>
  </div>
{/if}

<style>
  .stacks-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .row {
    display: flex;
    gap: 12px;
  }
</style>
