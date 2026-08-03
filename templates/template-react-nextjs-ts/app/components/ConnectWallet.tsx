"use client";

import { connect, disconnect } from "@stacks/connect";
import styles from "../stacks.module.css";

export default function ConnectWallet({
  address,
  mounted,
  refresh,
}: {
  address: string | null;
  mounted: boolean;
  refresh: () => void;
}) {
  async function handleConnect() {
    // `connect()` opens the wallet selector and caches the addresses
    await connect();
    refresh();
  }

  function handleDisconnect() {
    disconnect(); // clears local storage and the selected wallet
    refresh();
  }

  // Avoid a hydration mismatch: local storage is only available in the browser
  if (!mounted) return null;

  if (!address) {
    return (
      <div className={styles.section}>
        <button className={styles.button} onClick={handleConnect}>
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <p className={styles.address}>Connected: {address}</p>
      <div className={styles.row}>
        <button className={styles.button} onClick={handleDisconnect}>
          Disconnect Wallet
        </button>
      </div>
    </div>
  );
}
