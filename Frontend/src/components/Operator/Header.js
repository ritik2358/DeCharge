import React, { useState, useEffect } from "react";

function Header() {

  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  };

  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        const address = window.ethereum.selectedAddress;
        setWalletAddress(address);
      } else {
        setWalletAddress('');
      }
    };

    checkWallet();

    // Listen for changes in wallet connection status
    window.ethereum?.on('accountsChanged', checkWallet);

    // Cleanup the event listener on component unmount
    return () => {
      window.ethereum?.removeListener('accountsChanged', checkWallet);
    };
  }, []);
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome,
              <br className="hidden md:block" />
              Mr{' '}
              <span className="inline-block text-amber-500">
              {walletAddress}
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              There are 4 Chargers you added.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header