import WalletConnectButton from '../components/Web3Modal'
import WorldCoinButton from '../components/WorldCoinButton'

export default function Home() {
  return (
    <div className="w-[400px] h-[600px] flex flex-col items-center justify-center gap-4 bg-gray-200">
      <WalletConnectButton />

      <WorldCoinButton />
    </div>
  )
}
