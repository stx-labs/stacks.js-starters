<script lang="ts">
  import { wallet } from '../lib/stacks.svelte'

  let error: string | undefined = $state()

  async function onConnect() {
    error = undefined
    try {
      await wallet.connect()
    } catch (e) {
      error = e instanceof Error ? e.message : String(e)
    }
  }
</script>

<div class="stacks-card">
  {#if wallet.connected}
    <p>Connected as <code>{wallet.stxAddress}</code></p>
    <button type="button" class="counter" onclick={() => wallet.disconnect()}>
      Disconnect wallet
    </button>
  {:else}
    <button type="button" class="counter" onclick={onConnect}>
      Connect wallet
    </button>
  {/if}
  {#if error}
    <p class="error">{error}</p>
  {/if}
</div>
