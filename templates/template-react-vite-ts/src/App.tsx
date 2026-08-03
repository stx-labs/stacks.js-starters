import './App.css'
import ConnectWallet from './components/ConnectWallet'
import ContractCallVote from './components/ContractCallVote'

function App() {
  return (
    <main>
      <h1>Vite + React + Stacks.js</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR.
      </p>

      {/* ConnectWallet file: `./src/components/ConnectWallet.tsx` */}
      <ConnectWallet />

      {/* ContractCallVote file: `./src/components/ContractCallVote.tsx` */}
      <ContractCallVote />

      <p>
        <a href="https://docs.hiro.so/stacks.js" rel="noopener noreferrer" target="_blank">
          Stacks.js documentation
        </a>
      </p>
    </main>
  )
}

export default App
