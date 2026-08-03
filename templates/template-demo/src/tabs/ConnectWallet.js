import React from "react";
import { connect, disconnect } from "@stacks/connect";
import { getStxAddress, truncateAddress } from "../stacks";

const ConnectWallet = ({ connected, onConnectionChange }) => {
  async function handleConnect() {
    // `connect()` opens the wallet selector and caches the returned addresses
    // in local storage. It replaces `showConnect`/`authenticate` from v7.
    await connect();
    onConnectionChange();
  }

  function handleDisconnect() {
    // clears local storage and the remembered wallet selection
    disconnect();
    onConnectionChange();
  }

  const address = getStxAddress();

  return (
    <div className="tab">
      {/* intro */}
      <h2>Connecting a Wallet</h2>
      <p>
        First we need to connect a Stacks wallet using the{" "}
        <code>@stacks/connect</code> package. Calling <code>connect</code> (used
        by the "Connect Wallet" button below) will trigger the wallet popup to
        open and allow you to select an account.
      </p>
      {/* example */}
      <div className="frame">
        {connected ? (
          <p>Wallet is currently connected! 🎉</p>
        ) : (
          <p>Wallet is currently NOT connected!</p>
        )}
        <hr />
        <br />
        <button onClick={handleConnect}>Connect Wallet</button>
        <br />
        <br />
        <button onClick={handleDisconnect}>Disconnect Wallet</button>
        <p>
          <strong>isConnected:</strong> <code>{connected.toString()}</code>
        </p>
        <p>
          <strong>address</strong>: <code>{truncateAddress(address)}</code>
        </p>

        {/* file name */}
        <small>
          <code>tabs/ConnectWallet.js</code>
        </small>
      </div>
    </div>
  );
};

export default ConnectWallet;
