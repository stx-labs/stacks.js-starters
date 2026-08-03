const AppIntro = () => {
  return (
    <div className="frame">
      <h2>Stacks.js Demo</h2>
      <p>
        One tab per feature — edit the components in <code>src/tabs/</code>.
      </p>
      <p>
        Everything runs on the <code>testnet</code>. Get free testnet-STX from
        the{" "}
        <a
          href="https://explorer.hiro.so/sandbox/faucet?chain=testnet"
          target="_blank"
          rel="noopener noreferrer"
        >
          faucet in the Stacks Explorer
        </a>
        .
      </p>
      <p>
        <a
          href="https://docs.hiro.so/stacks.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          Stacks.js docs
        </a>
      </p>
    </div>
  );
};

export default AppIntro;
