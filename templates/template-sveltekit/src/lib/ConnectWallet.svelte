<script>
  import {
    connect,
    disconnect,
    getLocalStorage,
    isConnected,
  } from "@stacks/connect";
  import { onMount } from 'svelte';

  let connected = false;
  let address = '';

  function updateState() {
    connected = isConnected();
    const storage = getLocalStorage();
    if (connected && storage && storage.addresses?.stx?.[0]?.address) {
      address = storage.addresses.stx[0].address;
    }
  }

  onMount(() => {
    updateState();
  });

  async function authenticate() {
    await connect({
      network: "testnet",
    });
    updateState();
  }

  function handleDisconnect() {
    disconnect();
    updateState();
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
