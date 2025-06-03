import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
  request,
} from "@stacks/connect";
import { useState } from "react";

const ConnectWallet = () => {
  const [, setRefresh] = useState(0);
  const refresh = () => setRefresh((n) => n + 1);
  const storage = getLocalStorage();

  if (isConnected() && storage) {
    return (
      <div>
        <button
          className="Connect"
          onClick={() => {
            disconnect();
            refresh();
          }}
        >
          Disconnect Wallet
        </button>
        <p>BTC Address: {storage.addresses.btc[0].address}</p>
        <p>STX Address: {storage.addresses.stx[0].address}</p>
      </div>
    );
  }

  return (
    <button
      className="Connect"
      onClick={async () => {
        await request("getAddresses", {
          network: "testnet",
        });
        refresh();
      }}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
