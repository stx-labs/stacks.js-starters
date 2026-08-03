<script>
  import { connectWallet, disconnectWallet, wallet, NETWORK } from '../lib/stacks.svelte.js'

  async function onConnect() {
    try {
      await connectWallet()
    } catch (error) {
      console.log('connect canceled or failed:', error)
    }
  }
</script>

<div class="stacks-block">
  {#if wallet.connected}
    <button type="button" onclick={disconnectWallet}>Disconnect wallet</button>
    <p>{NETWORK}: <code>{wallet.stxAddress}</code></p>
  {:else}
    <button type="button" onclick={onConnect}>Connect wallet</button>
  {/if}
</div>

<style>
  .stacks-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
</style>
