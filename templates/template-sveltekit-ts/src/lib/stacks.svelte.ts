import { connect, disconnect, getLocalStorage, isConnected } from '@stacks/connect';

/** The network used by the demo contract call. */
export const NETWORK = 'testnet';

/**
 * Reactive wallet state, shared by all components.
 *
 * `@stacks/connect` v8 keeps the connected addresses in local storage, so this
 * store is just a thin reactive mirror of `isConnected()`/`getLocalStorage()`.
 */
function createWalletStore() {
	let connected = $state(false);
	let stxAddress = $state<string | undefined>(undefined);

	function sync() {
		connected = isConnected();
		stxAddress = getLocalStorage()?.addresses?.stx?.[0]?.address;
	}

	return {
		get connected() {
			return connected;
		},
		get stxAddress() {
			return stxAddress;
		},
		/** Read the current connection state from local storage. */
		sync,
		/** Open the wallet selector and request the user's addresses. */
		async connect() {
			await connect();
			sync();
		},
		/** Clear the local storage session and selected wallet. */
		disconnect() {
			disconnect();
			sync();
		}
	};
}

export const wallet = createWalletStore();
