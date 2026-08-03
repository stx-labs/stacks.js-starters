import { useWallet } from '../hooks/use-wallet'

export default function ConnectWallet() {
  const { connected, address, login, logout } = useWallet()

  if (!connected) {
    return (
      <button type="button" onClick={() => void login()}>
        Connect Wallet
      </button>
    )
  }

  return (
    <div className="stacks-panel">
      <p>
        Connected as <code>{address}</code>
      </p>
      <button type="button" onClick={logout}>
        Disconnect Wallet
      </button>
    </div>
  )
}
