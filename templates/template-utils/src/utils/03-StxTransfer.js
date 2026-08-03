import { useState } from "react";
import { request } from "@stacks/connect";
import { STACKS_TESTNET } from "@stacks/network";

const NetworkInfo = () => (
  <p className="Muted">
    Amounts are in microSTX. Network:{" "}
    <span className="Mono">{STACKS_TESTNET.client.baseUrl}</span>
  </p>
);

const StxTransfer = ({ connected }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  async function handleTransfer() {
    setResult("");
    try {
      // v8: no `openSTXTransfer` — use the `request` RPC method instead
      const response = await request("stx_transferStx", {
        recipient,
        amount, // microSTX
        network: "testnet", // v7 dropped the `StacksTestnet` class, strings work
      });
      setResult(`txid: ${response.txid}`);
    } catch (err) {
      setResult(`Failed: ${err}`);
    }
  }

  return (
    <div className="Card">
      <h2>STX Transfer</h2>
      <NetworkInfo />
      <div className="Row">
        <label htmlFor="recipient">Recipient</label>
        <input
          id="recipient"
          className="Mono"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
        />
      </div>
      <div className="Row">
        <label htmlFor="amount">microSTX</label>
        <input
          id="amount"
          className="Mono"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="1000000"
        />
      </div>
      <button className="Vote" onClick={handleTransfer} disabled={!connected}>
        {connected ? "Send STX" : "Connect wallet first"}
      </button>
      {result && <p className="Mono Muted">{result}</p>}
    </div>
  );
};

export default StxTransfer;
