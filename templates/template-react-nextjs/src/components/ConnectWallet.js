"use client";

import React, { useEffect, useState } from "react";
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";

const ConnectWallet = () => {
  const [mounted, setMounted] = useState(false);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    setMounted(true);
    updateState();
  }, []);

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

  async function authenticate() {
    await connect({
      network: "testnet",
      onFinish: () => {
        updateState();
      },
      onCancel: () => {
        // Handle cancelation if needed
      },
    });
  }

  function handleDisconnect() {
    disconnect();
    updateState();
  }

  if (!mounted) {
    return null; // Or a loading indicator
  }

  if (connected) {
    return (
      <div className="Container">
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
