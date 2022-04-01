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

  const [data, setData] = useState(null)
  const [mintingApproved, setMintingApproved] = useState(false)
  const [isSaled, setIsSaled] = useState(false);
  const search_word = useSelector(state => state.search_word)
  const [search, setSearch] = useState("")
  const [owner, setOwner] = useState("");
  const account = context.walletAddress;

  const NFTContract = context.NFTContract;
  const BUSDContract = context.BUSDContract;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // setSearch(search_word.search_word)
    const init = async () => {
      const _owner = await NFTContract.methods.ownerOf(NFT.tokenId).call();
      setOwner(_owner);
    }

    if(context.walletConnected) {
      fetch(NFT[1])
        .then(res => res.json())
        .then(resJson => {
          setData(resJson)
        })
        .catch(err => {
          console.log("err =>", err)
        })
      setIsSaled(NFT[0]);
      init();
    }
  }, [NFT])

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
    localStorage.setItem("NFT", JSON.stringify(NFT))
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
            {data && data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
        <Stack direction="row" spacing={10} justifyContent={'space-around'} alignItems={'center'}>
          <Typography gutterBottom variant="h6" component="div">
            {/* {NFT[3] && ethers.utils.formatUnits(NFT[3])} BUSD */}
            {NFT[3] && Number(ethers.utils.formatEther(NFT[3]))} BUSD
          </Typography>

          {/* {mintingApproved ? ( */}
          {NFT[0] && account !== process.env.REACT_APP_DAVIDE_WALLET && 
            <Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => { buyNFT(NFT.tokenId, NFT[3], NFT[2]) }}>
              Buy
            </Button>
          }
            {/* ) : (
            <Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => handleMintingApprove(NFT[3])}>Approve</Button>
          )} */}
        </Stack>
      </CardActions>
    </Card>
  );
}
