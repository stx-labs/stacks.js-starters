import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";
import { useReducer } from "react";

const ConnectWallet = () => {
  const reload = useReducer((s) => s + 1, 0)[1];

  const stxAddress = isConnected()
    ? getLocalStorage()?.addresses?.stx?.[0]?.address
    : undefined;

  async function handleConnect() {
    try {
      await connect();
      reload();
    } catch (error) {
      console.error("Failed to connect:", error);
      // Optionally, handle connection error state here
    }
  }

  function handleDisconnect() {
    disconnect();
    reload();
  }

  if (stxAddress) {
    return (
      <div>
        <button className="Connect" onClick={handleDisconnect}>
          Disconnect Wallet
        </button>
        <p>STX Address: {stxAddress}</p>
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
