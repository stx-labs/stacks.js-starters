import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";
import { useReducer } from "react";

const ConnectWallet = () => {
  const reload = useReducer((s) => s + 1, 0)[1];

  const address =
    isConnected() && getLocalStorage()?.addresses?.stx?.[0]?.address;

  async function handleConnect() {
    await connect();
    reload();
  }

  function handleDisconnect() {
    disconnect();
    reload();
  }

  if (address) {
    return (
      <div>
        <button className="Connect" onClick={handleDisconnect}>
          Disconnect Wallet
        </button>
        <p>STX Address: {address}</p>
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
