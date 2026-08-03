import { request } from "@stacks/connect";
import { useState } from "react";

const SignMessage = () => {
  const [message, setMessage] = useState("Hello from Stacks.js! 👋");
  const [result, setResult] = useState();
  const [error, setError] = useState();

  async function sign() {
    setError(undefined);
    try {
      // Message signing never touches the blockchain — there is no transaction
      // and no fee. It proves control over the connected account.
      const response = await request("stx_signMessage", { message });

      console.log("response", response);
      setResult(response);
    } catch (e) {
      console.error("error", e);
      setError(String(e?.message ?? e));
    }
  }

  return (
    <div className="tab">
      {/* intro */}
      <h2>Signing a Message</h2>
      <p>
        Wallets can also sign arbitrary messages via{" "}
        <code>request("stx_signMessage")</code>. The signature and public key
        returned can be verified by a backend to prove account ownership — no
        transaction is broadcast.
      </p>

      {/* example */}
      <div className="frame">
        <div className="box">
          <p>
            <label htmlFor="message">Message</label>
            <br />
            <input
              id="message"
              size={32}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </p>
          <button onClick={sign} disabled={!message}>
            Sign Message
          </button>
          {result && (
            <>
              <p>
                <strong>signature</strong>
                <br />
                <code style={{ wordBreak: "break-all" }}>
                  {result.signature}
                </code>
              </p>
              <p>
                <strong>publicKey</strong>
                <br />
                <code style={{ wordBreak: "break-all" }}>
                  {result.publicKey}
                </code>
              </p>
            </>
          )}
          {error && (
            <p>
              <code>{error}</code>
            </p>
          )}
        </div>
        {/* file name */}
        <small>
          <code>tabs/SignMessage.js</code>
        </small>
      </div>
    </div>
  );
};

export default SignMessage;
