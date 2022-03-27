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
  const account = context.walletAddress;

  const NFTContract = context.NFTContract;
  const BUSDContract = context.BUSDContract;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // setSearch(search_word.search_word)

    fetch(NFT[1])
      .then(res => res.json())
      .then(resJson => {
        setData(resJson)
      })
      .catch(err => {
        console.log("err =>", err)
      })
    setIsSaled(NFT[0]);
  }, [])

  const handleMintingApprove = async (tokenId) => {
    try {
      const NFTApprovedResult = await NFTContract.approve(
        account,
        tokenId
      )
      const mintingApprovedResult = await BUSDContract.methods.approve(
        process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        ethers.constants.MaxUint256
      ).send({from: account});
      enqueueSnackbar("Approved successfully!", {
        variant: "success",
      });
      setMintingApproved(true);
    } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar(error, {
        variant: "error",
      });
      setMintingApproved(false);
    }
  };

  const buyNFT = async (tokenId, price, isNewly) => {
    const owner = await NFTContract.methods.ownerOf(tokenId).call();
    if(account.toLowerCase() === owner) {
      enqueueSnackbar("You are owner of this NFT.", {
        variant: "error"
      })
      return;
    }
    const BUSDBalance = await BUSDContract.methods.balanceOf(account).call();
    if(BUSDBalance < ethers.utils.parseUnits(String(price))) {
      enqueueSnackbar("Your balance is not sufficient.", {
        variant: "error"
      })
      return;
    }

    const allowance = await BUSDContract.methods.allowance(account, process.env.REACT_APP_NFT_CONTRACT_ADDRESS).call();
    if(allowance < price) {
      await BUSDContract.methods.approve(process.env.REACT_APP_NFT_CONTRACT_ADDRESS, ethers.utils.parseUnits(String(price), "ether")).send({from: account});
    }
    if(!isNewly) {
      const isApproved = await NFTContract.methods.isApprovedForAll(
        account,
        process.env.REACT_APP_MARKET_CONTRACT_ADDRESS,
      ).call();
      if (!isApproved) {
        await NFTContract.methods.setApprovalForAll(
          process.env.REACT_APP_MARKET_CONTRACT_ADDRESS,
          true,
        ).send({from: account});
      }
    }

    enqueueSnackbar("NFT is yours!", {
      variant: "success",
    });

    await NFTContract.methods.buyNFT(tokenId).send({from: account});
    setTimeout(() => {
      navigate('/assets');
    }, 2000);
  }

  return (
    <Card sx={{
      maxWidth: 250,
      margin: '20px',
      ...(!setIsSaled && { display: 'none' })
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data && data.image}
          alt="NFT Image"
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title : {data && data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            P.I : {data && data.pi}
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
          {NFT[0] && 
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
