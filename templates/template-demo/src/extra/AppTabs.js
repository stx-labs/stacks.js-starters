import { useEffect, useState } from "react";
import ConnectWallet from "../tabs/ConnectWallet";
import ContractCallVote from "../tabs/ContractCallVote";
import { isConnected } from "@stacks/connect";

const tabs = {
  "Connect Wallet": ConnectWallet,
  "Contract Interaction": ContractCallVote,
  "Gaia Data Storage ": null,
  "Multisig Transactions ": null,
};
const initial = Object.keys(tabs)[0];

const AppTabs = ({ addTx }) => {
  const [connected, setConnected] = useState(false);
  const [tab, setTab] = useState(initial);
  const Tab = tabs[tab];

  useEffect(() => {
    setConnected(isConnected());
  }, []);

  return (
    <div className="AppTabs">
      <div className="AppTabs-nav">
        <h3>Try Out the Features</h3>
        {Object.keys(tabs).map((k) => (
          <button
            key={k}
            className={k === tab ? "selected" : ""}
            onClick={() => setTab(k)}
            disabled={!tabs[k] || (k !== initial && !connected)}
            title={
              !tabs[k] ? "Coming soon" : connected ? k : "Connect wallet first"
            }
          >
            {k}
          </button>
        ))}
      </div>
      <br />
      <Tab addTx={addTx} />
    </div>
  );
};

export default AppTabs;
