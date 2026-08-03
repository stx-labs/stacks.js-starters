import { useState } from "react";
import { isConnected } from "@stacks/connect";

import "./App.css";

import Intro from "./Intro";
import ConnectWallet from "./components/ConnectWallet";
import Units from "./utils/01-Unit";
import ClarityEncoder from "./utils/02-ClarityEncoder";
import StxTransfer from "./utils/03-StxTransfer";

function App() {
  // `isConnected()` reads local storage, so mirror it in state to re-render on change
  const [connected, setConnected] = useState(isConnected);
  const refresh = () => setConnected(isConnected());

  return (
    <div className="App">
      <Intro />

      <ConnectWallet connected={connected} onChange={refresh} />
      <Units />
      <ClarityEncoder />
      <StxTransfer connected={connected} />
    </div>
  );
}

export default App;
