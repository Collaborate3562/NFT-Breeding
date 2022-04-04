import { React, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Button, CardActionArea, CardActions, Stack, Divider } from '@mui/material';

// Contract
import { useAppContext } from "../contexts/AppContext";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";

export default function Card_Research({ NFT }) {
  const context = useAppContext();

  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [NFTData, setNFTData] = useState(null);
  const [mintingApproved, setMintingApproved] = useState(false);
  const [isSaled, setIsSaled] = useState(false);
  const search_word = useSelector(state => state.search_word);
  const [search, setSearch] = useState("");
  const [owner, setOwner] = useState("");
  const account = context.walletAddress;

  const NFTContract = context.NFTContract;
  const BUSDContract = context.BUSDContract;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // console.log('card_rearch', NFT);
    setNFTData(NFT);
  }, [NFT]);

  useEffect(() => {
    if(context.networkId !== 0 && context.networkId !== Number(process.env.REACT_APP_TEST_NETWORK_ID)) {
      enqueueSnackbar("Please select Binance Smart Chain Testnet.", {
        variant: "error"
      })

      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [context.networkId])

  useEffect(() => {
    const init = async () => {
      const _owner = await NFTContract.methods.ownerOf(NFT.tokenId).call();
      setOwner(_owner);
    }

    if(context.walletConnected) {
      if(NFTData !== null) {
        fetch(NFTData[1])
        .then(res => res.json())
        .then(resJson => {
          setData(resJson)
        })
        .catch(err => {
          console.log("err =>", err)
        })
        setIsSaled(NFTData[0]);
        init();
      }
    }
  }, [NFTData]);

  const buyNFT = async (tokenId, price, isNewly) => {
    if(!context.walletConnected) {
      enqueueSnackbar("Please connect wallet", {
        variant: "error"
      })
      return;
    }
    const owner = await NFTContract.methods.ownerOf(tokenId).call();
    if(account.toLowerCase() === owner.toLowerCase()) {
      enqueueSnackbar("You are owner of this NFT.", {
        variant: "error"
      })
      return;
    }
    const BUSDBalance = await BUSDContract.methods.balanceOf(account).call();
    console.log('BUSDBalance', BUSDBalance);
    console.log('price', price);
    if(Number(ethers.utils.formatEther(BUSDBalance)) < Number(ethers.utils.formatEther(price))) {
      enqueueSnackbar("Your balance is not sufficient.", {
        variant: "error"
      })
      return;
    }

    const allowance = await BUSDContract.methods.allowance(account, process.env.REACT_APP_NFT_CONTRACT_ADDRESS).call();

    if(Number(ethers.utils.formatEther(allowance)) < Number(ethers.utils.formatEther(price))) {
      await BUSDContract.methods.approve(process.env.REACT_APP_NFT_CONTRACT_ADDRESS, ethers.utils.parseUnits(ethers.utils.formatEther(price), "ether")).send({from: account});
    }

    await NFTContract.methods.buyNFT(tokenId).send({from: account});
    enqueueSnackbar("NFT is yours!", {
      variant: "success",
    });
    setTimeout(() => {
      navigate('/assets');
    }, 2000);
  }

  const resell = (NFT) => {
    localStorage.setItem("NFT", JSON.stringify(NFTData));
    navigate("/resell");
  }

  return (
    <Card sx={{
      maxWidth: 250,
      margin: '20px',
      ...(!setIsSaled && { display: 'none' })
    }}>
      <CardActionArea onClick={(idNFT) => {resell(NFT)}}>
        <CardMedia
          component="img"
          height="140"
          image={data && data.image}
          alt="NFT Image"
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data && data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            P.I : {data && data.pi} %
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data && data.description.length > 19 ?
              String(data.description).substring(0, 19) + "..."
              : data && data.description.length < 19 &&
              data.description
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
        <Stack direction="row" spacing={10} justifyContent={'space-around'} alignItems={'center'}>
          <Stack direction="col" spacing={10} justifyContent={'space-around'} alignItems={'center'}>
            <Typography gutterBottom variant="h6" component="div">
              { NFTData !== null && Number(ethers.utils.formatEther(NFTData[3])).toFixed(2) } BUSD
            </Typography>
          </Stack>
          {NFTData !== null && NFTData[0] && account !== process.env.REACT_APP_DAVIDE_WALLET && 
            <Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => { buyNFT(NFTData.tokenId, NFTData[3], NFTData[2]) }}>
              Buy
            </Button>
          }
        </Stack>
      </CardActions>
    </Card>
  );
}
