import { React, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack, Divider } from '@mui/material';
import { ethers } from "ethers";
// Contract
import { useAppContext } from "../contexts/AppContext";
import { useSnackbar } from "notistack";

export default function MultiActionAreaCard({ NFT }) {
  const context = useAppContext();

  const [data, setData] = useState(null);
  const [NFTData, setNFTData] = useState(null);
  const NFTContract = context.NFTContract;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setNFTData(NFT);
    console.log('NFTData', NFTData);
  }, [])

  useEffect(() => {
    if(NFTData !== null) {
      fetch(NFTData[1])
      .then(res => res.json())
      .then(resJson => {
        setData(resJson)
      })
      .catch(err => {
        console.log("err =>", err)
      })
    }
  }, [NFTData])

  const resellNFT = async (id) => {
    await NFTContract.methods.resellNFT(id).send({from: context.walletAddress});

    const newNFT = await NFTContract.methods.getNFT(id).call();
    newNFT.tokenId = id;
    setNFTData(newNFT);

    enqueueSnackbar("Resell is available, confirm it in research page!", {
      variant: "success",
    });
  }

  const cancelResellNFT = async (id) => {
    await NFTContract.methods.cancelResell(id).send({from: context.walletAddress});

    const newNFT = await NFTContract.methods.getNFT(id).call();
    newNFT.tokenId = id;
    setNFTData(newNFT);

    enqueueSnackbar("Resell is cancelled!", {
      variant: "success",
    });
  }

  return (
    <Card sx={{
      maxWidth: 260,
      margin: '20px'
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
        <Stack direction="row" spacing={3} justifyContent={'space-around'} alignItems={'center'}>
          <Typography gutterBottom variant="h6" component="div">
          {NFTData !== null && Number(ethers.utils.formatEther(NFTData[3]))} BUSD
          </Typography>
          {NFTData !== null &&
            !NFTData[0] ?
            (<Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => {resellNFT(NFTData.tokenId)}} >Resell</Button>)
            :
            (<Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => {cancelResellNFT(NFTData.tokenId)}} >Cancel Resell</Button>)
          }
        </Stack>
      </CardActions>
    </Card>
  );
}
