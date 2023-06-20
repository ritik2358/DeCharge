import React, { useState, useEffect } from "react";
import logo from './logo.svg';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [walletOwner, setWalletOwner] = useState('');

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

  const formatWalletAddress = (address) => {
    const firstChars = address.slice(0, 4);
    const lastChars = address.slice(-3);
    return `${firstChars}...${lastChars}`;
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
    <div className="bg-green-700">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} width="45" height="30" alt="" />
            <span className="ml-4 text-2xl font-bold tracking-wide text-gray-100 uppercase">
              D-Charging
            </span>
          </a>
          
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {!walletAddress ? (
              <li>
                <button
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-green-700 transition duration-200 rounded shadow-md bg-white hover:bg-green-300 hover:text-white focus:shadow-outline focus:outline-none"
                  aria-label="Connect Wallet"
                  title="Connect Wallet"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              </li>
            ) : (
              <li>
                <p className="text-gray-100">
                  {formatWalletAddress(walletAddress)}
                </p>
              </li>
            )}
          </ul>
          <div className="lg:hidden">
            {/* Add your mobile menu button and menu here */}
          </div>
        </div>
      </div>
    </div>
  );
};
