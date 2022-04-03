import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack, Divider, Grid } from '@mui/material';
import ScaleLoader from "react-spinners/ScaleLoader";
import { ethers } from "ethers";
// Contract
import { useAppContext } from "../contexts/AppContext";
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom'

const LoadingStyle = styled(motion.div)({
  zIndex: 200,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
});

export default function MultiActionAreaCard({ NFT }) {
  const context = useAppContext();

  const [data, setData] = useState(null);
  const [NFTData, setNFTData] = useState(null);
  const [loading, setLoading] = useState(false);
  const NFTContract = context.NFTContract;
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setNFTData(NFT);
  }, [])

  useEffect(() => {
    if(NFTData !== null) {
      setLoading(true);
      fetch(NFTData[1])
      .then(res => res.json())
      .then(resJson => {
        setData(resJson)
      })
      .catch(err => {
        console.log("err =>", err)
      })
      setLoading(false);
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

  const resell = (NFT) => {
    // history.push('/resell')
    localStorage.setItem("NFT", JSON.stringify(NFTData))
    navigate("/resell");
  }

  return (
    <>
      {loading ?
        (<LoadingStyle><ScaleLoader size={150} color='#ffffff' /></LoadingStyle>)
        :
        (
        <Card sx={{
          maxWidth: 260,
          margin: '20px'
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
            <Stack direction="row" spacing={3} justifyContent={'space-around'} alignItems={'center'}>
              <CardContent sx={{ p: 0 }}>
                <Stack direction="row" spacing={1} sx={{ p: 0 }}>
                  <Typography component="div" sx={{ width: '50%', fontSize: '14px', minWidth: '100px', color: '#369058', fontWeight: 'bold' }}>
                    INITIAL PRICE
                  </Typography>
                  <Typography component="div" sx={{ width: '50%', fontSize: '14px', minWidth: '100px', color: '#B62A33', fontWeight: 'bold' }}>
                    RESELL PRICE
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ p: 0 }}>
                  <Typography variant="h6" component="div" sx={{ width: '50%' }}>
                    { NFTData !== null && Number(ethers.utils.formatEther(NFTData[3])).toFixed(2)}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ width: '50%' }}>
                    { NFTData !== null && data && Number((Number(ethers.utils.formatEther(NFTData[3])))*(Number(data.pi)+100)/100).toFixed(2) }
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ p: 0 }}>
                  <Typography variant="h6" component="div" sx={{ width: '50%' }}>
                    BUSD
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ width: '50%' }}>
                    BUSD
                  </Typography>
                </Stack>
                {NFTData !== null && context.walletAddress !== process.env.REACT_APP_DAVIDE_WALLET && !NFTData[0] ?
                  (<Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => {resellNFT(NFTData.tokenId)}} >Resell</Button>)
                  : NFTData !== null && context.walletAddress !== process.env.REACT_APP_DAVIDE_WALLET && NFTData[0] &&
                  (<Button variant="contained" sx={{ border: '1px solid black' }} onClick={() => {cancelResellNFT(NFTData.tokenId)}} >Cancel Resell</Button>)
                }
              </CardContent>
            </Stack>
          </CardActions>
        </Card>
        )
      }
    </>
  );
}
