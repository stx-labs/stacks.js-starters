import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";
import { useReducer } from "react";

const ConnectWallet = () => {
  const refresh = useReducer((x) => x + 1, 0)[1];

  // load account address if wallet connected
  const isUserSignedIn = isConnected();
  const address = isUserSignedIn
    ? getLocalStorage().addresses.stx[0].address
    : "";

  const truncatedAddress = `${address.slice(0, 4)}…${address.slice(-4)}`;

  return (
    <div className="tab">
      {/* intro */}
      <h2>Connecting a Wallet</h2>
      <p>
        First we need to connect a Stacks wallet using the{" "}
        <code>@stacks/connect</code> package. Calling <code>connect()</code>{" "}
        (used by the "Connect Wallet" button below) will trigger the wallet
        popup to open and allow you to select an account.
      </p>
      {/* example */}
      <div className="frame">
        {isUserSignedIn ? (
          <p>Wallet is currently connected! 🎉</p>
        ) : (
          <p>Wallet is currently NOT connected!</p>
        )}
        <hr />
        <br />
        <button
          onClick={async () => {
            await connect({
              network: "testnet",
            });
            refresh();
          }}
        >
          Connect Wallet
        </button>
        <br />
        <br />
        <button onClick={disconnect}>Disconnect Wallet</button>
        <p>
          <strong>isConnected:</strong> <code>{isConnected().toString()}</code>
        </p>
        <p>
          <strong>address</strong>: <code>{truncatedAddress}</code>
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
