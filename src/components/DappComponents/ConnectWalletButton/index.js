import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import useAuth from "hooks/useAuth";
import Fortmatic from 'fortmatic';
import { useAppContext } from "../../../contexts/AppContext";
import binanceSVG from "../../../assets/images/binance-logo.svg";
import nftAbi from "../../../contracts/abi/NFTAbi.json";
import busdAbi from "../../../contracts/abi/ERC20Abi.json";

export default function ConnectWalletButton({ sx }) {
  const context = useAppContext();

  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const { login, logout } = useAuth();

  useEffect(()=>{
    init();
  }, [])

  const init = async() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        display: {
          name: "WalletConnect",
          description: ""
        },
        options: {
          rpc: {
            56: 'https://bsc-dataseed.binance.org/'
          },
          network:'binance'
        }
      },
      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key   pk_test_BE07D459798B75D3
          key: "pk_live_6864B8CA9D7B02D6"
        }
      },
      "custom-binancechainwallet": {
        display: {
          logo: binanceSVG,
          name: "Binance Chain Wallet",
          description: "Connect to your Binance Chain Wallet"
        },
        package: true,
        connector: async () => {
          let provider = null;
          if (typeof window.BinanceChain !== 'undefined') {
            provider = window.BinanceChain;
            try {
              await provider.request({ method: 'eth_requestAccounts' })
            } catch (error) {
              throw new Error("User Rejected");
            }
          } else {
            throw new Error("No Binance Chain Wallet found");
          }
          return provider;
        }
      }
    };
    let web3_Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)",
        zIndex: "1300",
      }
    });

    context.setWeb3Modal(web3_Modal);
  }

  const handleConnect = async() => {
    if(!context.walletConnected) {
        try {
          context.provider = await context.web3Modal.connect();
        } catch(e) {
          console.log("Could not get a wallet connection", e);
          return;
        }
        context.setProvider(context.provider);
        // Subscribe to accounts change
        context.provider.on("accountsChanged", (accounts) => {
          fetchAccountData();
        });
        console.log('provider chain changed')
        // Subscribe to chainId change
        context.provider.on("chainChanged", (chainId) => {
          fetchAccountData();
        });
        console.log('provider network changed')
        // Subscribe to networkId change
        context.provider.on("networkChanged", (networkId) => {
          fetchAccountData();
        });
        context.setWalletConnected(true);
        await refreshAccountData();
    } else {
      context.setWalletConnected(!context.walletConnected);
      await Disconnect();
    }
  }

  const fetchAccountData = async () =>{
    let web3 = new Web3(context.provider);
    context.setWeb3(web3);

    const chainId = await web3.eth.getChainId();
    const accounts = await web3.eth.getAccounts();
    context.setWallet(accounts[0]);

    const nftContract = await new web3.eth.Contract(nftAbi, process.env.REACT_APP_NFT_CONTRACT_ADDRESS);
    const busdContract = await new web3.eth.Contract(busdAbi, process.env.REACT_APP_BUSD_CONTRACT_ADDRESS);
    const _saleList = await nftContract.methods.getSaleList().call();

    context.setSaleList(_saleList);
    context.setNFTContract(nftContract);
    context.setBUSDContract(busdContract);
    context.setNetworkId(Number(chainId));
  }

  const refreshAccountData = async() => {
    console.log("refreshAccountData");
    await fetchAccountData(context.provider);
  }

  const Disconnect = async () => {
    if(context.provider.close) {
      await context.provider.close();
  
      await context.web3Modal.clearCachedProvider();
      context.setProvider(null);
    }
    context.setWalletConnected(false);
  }

  return (
    <>
      {context.walletConnected ? ( 
        <Button
          variant="contained"
          onClick={handleConnect}
          sx={{
            background:
              "linear-gradient(96.02deg, #ed824e -12.08%, #ed2a2a 137.69%, #ed824e -12.08%)",
            borderRadius: "4px",
            color: "white",
            minWidth: 160,
            transition: "all 0.3s !important",
            px: 2,
            py: 1,
            ...sx,
            "&:hover": {
              backgroundPostion: "100%",
            },
          }}
        >
          {"Connected: " +
          String(context.walletAddress).substring(0, 6) +
          "..." +
          String(context.walletAddress).substring(38)}
        </Button>
      ) : (
        <Button
          variant="variant"
          color="warning"
          onClick={handleConnect}
          sx={{
            background:
              "#ffffff",
            borderRadius: "4px",
            color: "#7414F5",
            minWidth: 160,
            transition: "all 0.3s !important",
            px: 2,
            py: 1,
            ...sx,
            "&:hover": {
              backgroundPostionX: "-160px",
            },
          }}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
