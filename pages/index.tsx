import WalletConnectButton from '../components/Web3Modal'

export default function Home() {
  return (
    <div className="w-[400px] h-[600px] flex flex-col items-center justify-center gap-4 bg-gray-200">
      <WalletConnectButton />
      <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
        Button 2
      </button>
    </div>
  )
}
