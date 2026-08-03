"use client";

import styles from "./stacks.module.css";
import { useStacks } from "./useStacks";

export default function ConnectWallet() {
  const { connected, address, connectWallet, disconnectWallet } = useStacks();

  if (!connected) {
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={disconnectWallet}>
          Disconnect Wallet
        </button>
      </div>
      {/* For security reasons v8 only returns the current network's address */}
      <p className={styles.address}>STX address: {address}</p>
    </div>
  );
}
