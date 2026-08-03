"use client";

import { request } from "@stacks/connect";
import { Cl } from "@stacks/transactions";
import styles from "../stacks.module.css";

const CONTRACT =
  "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract";

export default function ContractCallVote({ address }: { address: string | null }) {
  async function vote(pick: string) {
    try {
      const response = await request("stx_callContract", {
        contract: CONTRACT,
        functionName: "vote",
        functionArgs: [Cl.stringUtf8(pick)],
        network: "testnet",
      });

      console.log("txid:", response.txid);
      window
        .open(
          `https://explorer.hiro.so/txid/${response.txid}?chain=testnet`,
          "_blank",
        )
        ?.focus();
    } catch (error) {
      console.log("Transaction was canceled or failed:", error);
    }
  }

  if (!address) return null;

  return (
    <div className={styles.section}>
      <h2>Vote via Smart Contract</h2>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => vote("🍊")}>
          Vote for 🍊
        </button>
        <button className={styles.button} onClick={() => vote("🍎")}>
          Vote for 🍎
        </button>
      </div>
    </div>
  );
}
