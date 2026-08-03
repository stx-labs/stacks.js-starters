import styles from "./page.module.css";
import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Next.js + Stacks.js</h1>
          <p>
            Connect a Stacks wallet and call a smart contract. Start editing the
            components in <code>app/components</code>.
          </p>
          <a href="https://docs.hiro.so/stacks.js" target="_blank" rel="noopener noreferrer">
            Stacks.js docs
          </a>
        </div>

        {/* ConnectWallet file: `./app/components/ConnectWallet.js` */}
        <ConnectWallet />

        {/* ContractCallVote file: `./app/components/ContractCallVote.js` */}
        <ContractCallVote />
      </main>
    </div>
  );
}
