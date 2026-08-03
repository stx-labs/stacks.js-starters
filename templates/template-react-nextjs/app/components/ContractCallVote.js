"use client";

import { request } from "@stacks/connect";
import { Cl } from "@stacks/transactions";
import styles from "./stacks.module.css";
import { useStacks } from "./useStacks";

const CONTRACT = "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract";

export default function ContractCallVote() {
  const { connected } = useStacks();

  async function vote(pick) {
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
      console.error("Wallet returned an error:", error);
    }
  }

  if (!connected) return null;

  return (
    <div className={styles.container}>
      <h3>Vote via Smart Contract</h3>
      <div className={styles.buttons}>
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
