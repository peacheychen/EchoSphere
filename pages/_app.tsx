import '@/styles/globals.css'
import type { AppProps } from 'next/app'


// import { LensProvider } from '@/provider/LenProvider';
import { Web3ModalProvider } from '@/provider/WalletConnectProvider';


export default function App({ Component, pageProps }: AppProps) {

  return (
    < Web3ModalProvider>
      {/* <LensProvider> */}
      <Component {...pageProps} />
      {/* </LensProvider> */}
    </Web3ModalProvider >
  )
}

