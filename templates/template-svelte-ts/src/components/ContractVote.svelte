<script lang="ts">
  import { request } from '@stacks/connect'
  import { Cl } from '@stacks/transactions'
  import { NETWORK, wallet } from '../lib/stacks.svelte'

  const CONTRACT =
    'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract'

  let status: string | undefined = $state()

  async function vote(pick: string) {
    status = undefined
    try {
      const response = await request('stx_callContract', {
        contract: CONTRACT,
        functionName: 'vote',
        functionArgs: [Cl.stringUtf8(pick)],
        network: NETWORK,
      })
      status = `Broadcast ${response.txid}`
      window
        .open(
          `https://explorer.hiro.so/txid/${response.txid}?chain=${NETWORK}`,
          '_blank',
        )
        ?.focus()
    } catch (e) {
      status = e instanceof Error ? e.message : String(e)
    }
  }
</script>

{#if wallet.connected}
  <div class="stacks-card">
    <p>Vote via smart contract</p>
    <button type="button" class="counter" onclick={() => vote('🍊')}>
      Vote for 🍊
    </button>
    <button type="button" class="counter" onclick={() => vote('🍎')}>
      Vote for 🍎
    </button>
    {#if status}
      <p class="status">{status}</p>
    {/if}
  </div>
{/if}
