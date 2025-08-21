"use client";

import React, { useEffect, useState, useReducer } from "react";
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";

const ConnectWallet: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);
  const reload = useReducer((s) => s + 1, 0)[1];

  useEffect(() => {
    setHydrated(true);
  }, []);

  const stxAddress =
    hydrated && isConnected()
      ? getLocalStorage()?.addresses?.stx?.[0]?.address
      : undefined;

  async function handleConnect() {
    try {
      await connect(); // Use default options
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

  if (!hydrated) {
    return null; // Or a loading indicator
  }

  if (stxAddress) {
    return (
      <div className="Container">
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
