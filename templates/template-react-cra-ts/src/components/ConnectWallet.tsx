import { connect, disconnect, getLocalStorage } from "@stacks/connect";

/** Read the STX address that `connect()` cached in local storage. */
export function getStxAddress() {
  return getLocalStorage()?.addresses?.stx?.[0]?.address;
}

const ConnectWallet = ({
  connected,
  onChange,
}: {
  connected: boolean;
  onChange: () => void;
}) => {
  async function handleConnect() {
    // `connect()` opens the wallet selector and caches the address in local storage
    await connect();
    onChange();
  }

  function handleDisconnect() {
    // clears local storage and the selected wallet
    disconnect();
    onChange();
  }

  if (connected) {
    return (
      <div>
        <button className="Connect" onClick={handleDisconnect}>
          Disconnect Wallet
        </button>
        {/* @stacks/connect v8 only returns the currently selected network's address */}
        <p>stx address: {getStxAddress()}</p>
      </div>
    );
  }

  return (
    <button className="Connect" onClick={handleConnect}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
