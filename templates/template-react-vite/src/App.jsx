import './App.css'
import ConnectWallet from './components/ConnectWallet'
import ContractCallVote from './components/ContractCallVote'

function App() {
  return (
    <section id="center">
      <h1>Vite + React + Stacks.js</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>

      <ConnectWallet />
      <ContractCallVote />

      <p>
        <a href="https://docs.hiro.so/stacks.js">Stacks.js docs</a>
      </p>
    </section>
  )
}

export default App
