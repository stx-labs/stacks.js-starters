import { useState } from "react";
import { isConnected } from "@stacks/connect";

import "./App.css";

import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";

function App() {
  // `isConnected()` reads local storage, so mirror it in state to re-render on change
  const [connected, setConnected] = useState(isConnected);
  const refresh = () => setConnected(isConnected());

  return (
    <div className="App">
      <header className="App-header">
        <h2>React + Stacks.js</h2>

        {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
        <ConnectWallet connected={connected} onChange={refresh} />

        {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
        <ContractCallVote connected={connected} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.hiro.so/stacks.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          Stacks.js docs
        </a>
      </header>
    </div>
  );
}

export default App;
