import { useCallback, useState } from "react";
import AppIntro from "./extra/AppIntro";
import AppTabs from "./extra/AppTabs";
import AppTransactions from "./extra/AppTransactions";
import { isConnected } from "@stacks/connect";

function App() {
  const [txs, setTxs] = useState([]);
  const addTx = (txId) =>
    setTxs((prev) => [{ txId, date: new Date() }, ...prev]);

  // `isConnected()` reads local storage, so we mirror it in React state to
  // re-render the app whenever the connection changes.
  const [connected, setConnected] = useState(isConnected);
  const refreshConnection = useCallback(() => setConnected(isConnected()), []);

  return (
    <div className="App">
      <AppIntro />
      <AppTabs
        addTx={addTx}
        connected={connected}
        onConnectionChange={refreshConnection}
      />
      <AppTransactions txs={txs} />
    </div>
  );
}

export default App;
