<script>
	import { request } from '@stacks/connect';
	import { Cl } from '@stacks/transactions';
	import { wallet } from '$lib/stacks.svelte.js';

	/** @param {string} pick */
	async function vote(pick) {
		try {
			const response = await request('stx_callContract', {
				contract: 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract',
				functionName: 'vote',
				functionArgs: [Cl.stringUtf8(pick)],
				network: 'testnet'
			});

			console.log('txid:', response.txid);
			window
				.open(`https://explorer.hiro.so/txid/${response.txid}?chain=testnet`, '_blank')
				?.focus();
		} catch (error) {
			console.log('cancelled or failed:', error);
		}
	}
</script>

{#if wallet.connected}
	<div>
		<p>Vote via Smart Contract</p>
		<button onclick={() => vote('🍊')}>Vote for 🍊</button>
		<button onclick={() => vote('🍎')}>Vote for 🍎</button>
	</div>
{/if}

<style>
	div {
		margin-top: 16px;
	}

	button {
		background-color: rgba(148, 48, 148, 0.2);
		border: 2px solid rgb(148, 48, 148);
		border-radius: 14px;
		padding: 8px 12px;
		margin: 4px;
	}
</style>
