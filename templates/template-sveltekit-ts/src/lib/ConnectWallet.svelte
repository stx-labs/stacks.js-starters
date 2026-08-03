<script lang="ts">
	import { wallet } from '$lib/stacks.svelte';

	// Local storage is only available in the browser, so sync after mount.
	$effect(() => {
		wallet.sync();
	});

	async function authenticate() {
		try {
			await wallet.connect();
		} catch (error) {
			console.log('connect error:', error);
		}
	}
</script>

<div>
	{#if wallet.connected}
		<button onclick={() => wallet.disconnect()}> Disconnect Wallet </button>
		<p>address: {wallet.stxAddress}</p>
	{:else}
		<button onclick={authenticate}> Connect Wallet </button>
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
