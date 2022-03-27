import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWallet] = useState("");
  const [web3Modal, setWeb3Modal] = useState(null);
  let [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(0);
  const [NFTContract, setNFTContract] = useState(null);
  const [BUSDContract, setBUSDContract] = useState(null);

  return (
    <AppContext.Provider 
      value={{ 
        walletConnected,
        setWalletConnected,
        walletAddress,
        setWallet,
        web3Modal,
        setWeb3Modal,
        provider,
        setProvider,
        web3,
        setWeb3,
        NFTContract,
        setNFTContract,
        BUSDContract,
        setBUSDContract
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);