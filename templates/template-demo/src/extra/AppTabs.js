import { useState } from "react";
import ConnectWallet from "../tabs/ConnectWallet";
import ContractCallVote from "../tabs/ContractCallVote";
import SignMessage from "../tabs/SignMessage";
import StxTransfer from "../tabs/StxTransfer";

const tabs = {
  "Connect Wallet": ConnectWallet,
  "Contract Interaction": ContractCallVote,
  "STX Transfer": StxTransfer,
  "Message Signing": SignMessage,
};
const initial = Object.keys(tabs)[0];

const AppTabs = ({ addTx, connected, onConnectionChange }) => {
  const [tab, setTab] = useState(initial);
  const Tab = tabs[tab];

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
      <Tab
        addTx={addTx}
        connected={connected}
        onConnectionChange={onConnectionChange}
      />
    </div>
  );
};

export default AppTabs;
