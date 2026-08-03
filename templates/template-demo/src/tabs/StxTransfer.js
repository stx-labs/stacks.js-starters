import { request } from "@stacks/connect";
import { useState } from "react";
import { getStxAddress, NETWORK } from "../stacks";

const STX_TO_USTX = 1_000_000;

const StxTransfer = ({ addTx }) => {
  const [recipient, setRecipient] = useState(getStxAddress());
  const [amount, setAmount] = useState("0.001");
  const [error, setError] = useState();

  async function transfer() {
    setError(undefined);
    try {
      // `request("stx_transferStx")` replaces `openSTXTransfer` from v7.
      // Amounts are in micro-STX (1 STX = 1,000,000 µSTX) and sent as a string.
      const response = await request("stx_transferStx", {
        recipient,
        amount: String(Math.round(Number(amount) * STX_TO_USTX)),
        network: NETWORK,
        memo: "Sent from the Stacks.js demo",
      });

      console.log("response", response);
      addTx(response.txid);
    } catch (e) {
      console.error("error", e);
      setError(String(e?.message ?? e));
    }
  }

  return (
    <div className="tab">
      {/* intro */}
      <h2>Transferring STX</h2>
      <p>
        Sending tokens is the simplest transaction type. The wallet builds,
        signs, and broadcasts the transfer for us — we only describe what we
        want.
      </p>

      {/* example */}
      <div className="frame">
        <p>
          By default the recipient is your own address, so you can safely try
          this out on the <code>testnet</code>.
        </p>
        <div className="box">
          <p>
            <label htmlFor="recipient">Recipient</label>
            <br />
            <input
              id="recipient"
              size={42}
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="amount">Amount (STX)</label>
            <br />
            <input
              id="amount"
              type="number"
              min="0"
              step="0.000001"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </p>
          <button onClick={transfer} disabled={!recipient || !(amount > 0)}>
            Send {amount} STX
          </button>
          {error && (
            <p>
              <code>{error}</code>
            </p>
          )}
        </div>
        {/* file name */}
        <small>
          <code>tabs/StxTransfer.js</code>
        </small>
      </div>
    </div>
  );
};

export default StxTransfer;
