import { browser } from '$app/environment';
import { connect, disconnect, getLocalStorage, isConnected } from '@stacks/connect';

/** Reactive wallet state shared across components (Svelte 5 runes). */
class StacksWallet {
	connected = $state(false);
	/** @type {string | undefined} */
	stxAddress = $state(undefined);

	constructor() {
		this.sync();
	}

	/** Read the connection state cached in local storage by `@stacks/connect`. */
	sync() {
		if (!browser) return; // local storage is only available in the browser
		this.connected = isConnected();
		this.stxAddress = getLocalStorage()?.addresses?.stx?.[0]?.address;
	}

	/** Open the wallet selection dialog and request the user's addresses. */
	async connect() {
		await connect(); // caches the addresses in local storage
		this.sync();
	}

	/** Clear the cached addresses and the selected wallet. */
	disconnect() {
		disconnect();
		this.sync();
	}
}

export const wallet = new StacksWallet();
