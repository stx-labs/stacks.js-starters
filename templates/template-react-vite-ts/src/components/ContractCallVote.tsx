import { request } from '@stacks/connect'
import { Cl } from '@stacks/transactions'
import { useWallet } from '../hooks/use-wallet'

const CONTRACT =
  'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract'

export default function ContractCallVote() {
  const { connected } = useWallet()

  async function vote(pick: string) {
    try {
      const response = await request('stx_callContract', {
        contract: CONTRACT,
        functionName: 'vote',
        functionArgs: [Cl.stringUtf8(pick)],
        network: 'testnet',
      })
      console.log('vote:', response)
      window
        .open(
          `https://explorer.hiro.so/txid/${response.txid}?chain=testnet`,
          '_blank',
        )
        ?.focus()
    } catch (error) {
      console.error('vote canceled or failed:', error)
    }
  }

  if (!connected) return null

  return (
    <div className="stacks-panel">
      <p>Vote via Smart Contract</p>
      <button type="button" onClick={() => void vote('🍊')}>
        Vote for 🍊
      </button>
      <button type="button" onClick={() => void vote('🍎')}>
        Vote for 🍎
      </button>
    </div>
  )
}
