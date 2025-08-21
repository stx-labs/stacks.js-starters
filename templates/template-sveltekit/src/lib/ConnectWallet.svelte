<script>
  import {
    connect,
    disconnect,
    getLocalStorage,
    isConnected,
  } from "@stacks/connect";
  import { onMount } from 'svelte';

  let version = 0; // Reactive trigger

  // Re-evaluate when version changes.
  // The expression (version, isConnected()) ensures reactivity to 'version'.
  $: connected = (version, isConnected());

  // Re-evaluate when version or connected changes.
  $: address = (() => {
    version; // Explicitly depend on version to ensure re-evaluation
    if (connected) {
      const storage = getLocalStorage();
      return storage?.addresses?.stx?.[0]?.address || '';
    }
    return '';
  })();

  onMount(() => {
    version++; // Trigger initial state evaluation
  });

  async function authenticate() {
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
  {#if connected}
    <button on:click={handleDisconnect}> Disconnect Wallet </button>
    <p>STX Address: {address}</p>
  {:else}
    <button on:click={authenticate}> Connect Wallet </button>
  {/if}
</div>

<style>
  div {
    margin-top: 8px;
  }

  button {
    margin: 8px;
    background-color: #bbb;
    border: 2px solid #777;
    border-radius: 28px;
    font-size: 18px;
    padding: 16px 24px;
  }
</style>
