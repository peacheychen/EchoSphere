import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button'
import WalletConnectButton from '../components/Web3Modal'
import WorldCoinButton from '../components/WorldCoinButton'
import { useRouter } from 'next/router'

export default function Home() {
  const [currentSite, setCurrentSite] = useState('');
  const [activePage, setActivePage] = useState('index');

  const router = useRouter();

  const [url, setUrl] = useState<string>('');
  const [logo, setLogo] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs);
      setUrl(tabs?.[0].url || '');
      setLogo(tabs?.[0].favIconUrl || '');
      setTitle(tabs?.[0].title || '');
    });
  }, []);

  const navigateToUserHome = () => {
    router.push('/main'); // Replace '/userhome' with the actual path to your UserHome page
  };

  return (
    <div className="w-[400px] h-[600px] flex flex-col items-center justify-center gap-4 bg-gray-200">
      <WalletConnectButton />
      <WorldCoinButton />

      <Button onClick={navigateToUserHome}>
        test {url}
      </Button>
    </div>
  );
}
