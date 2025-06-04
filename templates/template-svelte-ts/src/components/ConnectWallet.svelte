<script lang="ts">
  import {
    connect,
    disconnect,
    getLocalStorage,
    isConnected,
  } from "@stacks/connect";
  import { onMount } from 'svelte';

  let version = 0; // Reactive trigger

  // Re-evaluate address when version changes.
  $: address = (() => {
    version; // Explicitly depend on version to ensure re-evaluation
    if (isConnected()) {
      const storage = getLocalStorage();
      return storage?.addresses?.stx?.[0]?.address || '';
    }
    return '';
  })();

  onMount(() => {
    version++; // Trigger initial state evaluation
  });

  async function handleConnect() {
    try {
      await connect();
      version++; // Trigger reactivity
    } catch (error) {
      console.error("Failed to connect:", error);
      // Optionally, handle connection error state here
    }
  }

  function handleDisconnect() {
    disconnect();
    version++; // Trigger reactivity
  }
</script>

<div>
  {#if isConnected()}
    <button on:click={handleDisconnect}> Disconnect Wallet </button>
    {#if address}
        <p>STX Address: {address}</p>
    {/if}
  {:else}
    <button on:click={handleConnect}> Connect Wallet </button>
  {/if}
</div>

<style>
  div {
    margin-top: 8px;
  }
</style>
