import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";
import { useState, useEffect } from "react";

const ConnectWallet = () => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const updateState = () => {
    const isUserConnected = isConnected();
    setConnected(isUserConnected);

    if (isUserConnected) {
      const storage = getLocalStorage();
      if (storage && storage.addresses?.stx?.[0]?.address) {
        setAddress(storage.addresses.stx[0].address);
      }
    }
  };

  useEffect(() => {
    updateState();
  }, []);

  async function authenticate() {
    await connect({
      network: "testnet",
    });
    updateState();
  }

  function handleDisconnect() {
    disconnect();
    updateState();
  }

  if (connected) {
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
    <button className="Connect" onClick={authenticate}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
