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

  if (stxAddress) {
    return (
      <div>
        <button
          className="Connect"
          onClick={() => {
            disconnect();
            reload();
          }}
        >
          Disconnect Wallet
        </button>
        <p>STX Address: {stxAddress}</p>
      </div>
    );
  }

  return (
    <button
      className="Connect"
      onClick={async () => {
        await connect();
        reload();
      }}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
