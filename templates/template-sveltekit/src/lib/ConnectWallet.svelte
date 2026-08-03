<script>
	import { wallet } from '$lib/stacks.svelte.js';
</script>

<div>
	{#if wallet.connected}
		<button onclick={() => wallet.disconnect()}>Disconnect Wallet</button>
		<p>STX address: {wallet.stxAddress}</p>
	{:else}
		<button onclick={() => wallet.connect()}>Connect Wallet</button>
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
