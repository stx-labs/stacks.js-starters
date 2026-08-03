import styles from "./page.module.css";

import StacksDemo from "./components/StacksDemo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Next.js + Stacks.js</h1>
          <p>
            Connect a Stacks wallet and call a smart contract. Edit the
            components in <code>app/components</code> to get started.
          </p>
        </div>

        <StacksDemo />

        <a
          href="https://docs.hiro.so/stacks.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stacks.js docs
        </a>
      </main>
    </div>
  );
}
