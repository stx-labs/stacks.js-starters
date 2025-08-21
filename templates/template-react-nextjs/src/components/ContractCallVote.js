"use client";

import React, { useEffect, useState } from "react";
import { isConnected, request } from "@stacks/connect";
import { Cl } from "@stacks/transactions";

const ContractCallVote = () => {
  const [mounted, setMounted] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConnected(isConnected());
  }, []);

  async function vote(pick) {
    try {
      const result = await request("stx_callContract", {
        contract:
          "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract",
        functionName: "vote",
        functionArgs: [Cl.stringUtf8(pick)],
        postConditions: [],
        postConditionMode: "deny",
      });
      console.log("result:", result);
      window
        .open(
          `https://explorer.hiro.so/txid/${result.txid}?chain=testnet`,
          "_blank"
        )
        ?.focus();
    } catch (e) {
      console.error(e);
    }
  }

  if (!mounted || !connected) {
    return null;
  }

  return (
    <div className="Container">
      <h3>Vote via Smart Contract</h3>
      <button className="Vote" onClick={() => vote("🍊")}>
        Vote for 🍊
      </button>
      <button className="Vote" onClick={() => vote("🍎")}>
        Vote for 🍎
      </button>
    </div>
  );
};

export default ContractCallVote;
