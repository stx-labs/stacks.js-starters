import { explorerTxUrl } from "../stacks";

/** v8 wallets may return the txid with or without a `0x` prefix. */
const withPrefix = (txId) => (txId.startsWith("0x") ? txId : `0x${txId}`);

const AppTransactions = ({ txs }) => {
  if (txs.length <= 0) {
    return <></>;
  }

  return (
    <div className="frame">
      <h3>Transaction History</h3>
      {txs.map((t, i) => {
        const txId = withPrefix(t.txId);
        return (
          <p key={t.date}>
            <code>{txs.length - i}: </code>
            <a
              href={explorerTxUrl(txId)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>
                {`${txId.slice(0, 8)}…${txId.slice(-6)}`} @{" "}
                {t.date.toLocaleTimeString()}
              </code>
            </a>
          </p>
        );
      })}
    </div>
  );
};

export default AppTransactions;
