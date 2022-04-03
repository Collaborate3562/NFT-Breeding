import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { React, useEffect, useState } from 'react';
import { Container, Typography, Stack, TextField, Grid, Button } from '@mui/material';
import { ethers } from "ethers";

//
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from "notistack";
import { varFadeInUp, varFadeInRight } from '../components/animate';
import Table from '../components/Table'

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: "#494949",
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} justifyContent="space-between" {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'center'
  },
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});
// ----------------------------------------------------------------------

export default function Resell() {
  const context = useAppContext();

  const NFT = localStorage.getItem("NFT") ? JSON.parse(localStorage.getItem("NFT")) : null;
  const [data, setData] = useState(null)
  const [NFTData, setNFTData] = useState(null);
  const [owner, setOwner] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const NFTContract = context.NFTContract;
  const BUSDContract = context.BUSDContract;
  const account = context.walletAddress;

  useEffect(() => {
    const init = async() => {
      const _owner = await NFTContract.methods.ownerOf(Number(NFT.tokenId)).call();
      setOwner(_owner.toLowerCase());
    }
    setNFTData(NFT);
    if(context.walletConnected) {
      fetch(NFT[1])
      .then(res => res.json())
      .then(resJson => {
        setData(resJson)
      })
      .catch(err => {
        console.log("err =>", err)
      }) 
      init();
    } else {
      navigate("/");
    }
  }, [])

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

  const buyNFT = async(id, price) => {
    if(!context.walletConnected) {
      enqueueSnackbar("Please connect wallet", {
        variant: "error"
      })
      return;
    }
    const owner = await NFTContract.methods.ownerOf(id).call();
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

    await NFTContract.methods.buyNFT(id).send({from: account});
    enqueueSnackbar("NFT is yours!", {
      variant: "success",
    });
    setTimeout(() => {
      navigate('/assets');
    }, 2000);
  }

  return (
    <RootStyle id="move_top" initial="initial" animate="animate" variants={varFadeInUp}>
      <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />

      <Container maxWidth="lg">
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Grid
              container
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={6} p={2}>
                <img src={data && data.image} alt="NFt" style={{width: '100%', height: '100%'}} />
              </Grid>

              <Grid item xs={12} md={6} mt={3}>
                <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '25px', mb: 5 }}>
                {data && data.name}
                </Typography>
                {/* Price */}
                <Stack sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: {xs: '100%', md: '300px'}, mb: 5 }} >
                  <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', borderBottom: "1px solid #7414f5" }}>
                    INITIAL PRICE
                  </Typography>
                  <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px' }}>
                  { NFTData !== null && data && Number(ethers.utils.formatEther(NFTData[3])).toFixed(2) } BUSD
                  </Typography>
                </Stack>
                <Stack sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: {xs: '100%', md: '300px'}, mb: 5 }} >
                  <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', borderBottom: "1px solid #7414f5" }}>
                    RESELL PRICE
                  </Typography>
                  <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px' }}>
                  { NFTData !== null && data && Number((Number(ethers.utils.formatEther(NFTData[3])))*(Number(data.pi)+100)/100).toFixed(2) } BUSD
                  </Typography>
                </Stack>
                {/* P.I. */}
                <Stack direction="row" spacing={13} sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: {xs: '100%', md: '300px'}, mb: 5 }} alignItems="center">
                  <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', p: '10px', borderRight: "1px solid #7414f5", width: "150px" }}>
                    P.I.
                  </Typography>
                  <Typography sx={{ color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px' }}>
                  {data && data.pi}
                  </Typography>
                </Stack>
                {/* Resell button */}
                {
                  NFTData !== null && NFTData[0] && owner === context.walletAddress.toLowerCase() ?
                  (<Button variant="contained" sx={{ border: '1px solid black', width: '300px' }} onClick={() => {cancelResellNFT(NFTData['tokenId'])}} >Cancel RESELL</Button>)
                  : NFTData !== null && !NFTData[0] && owner === context.walletAddress.toLowerCase() ?
                  (<Button variant="contained" sx={{ border: '1px solid black', width: '300px' }} onClick={() => {resellNFT(NFTData['tokenId'])}} >RESELL FOR { NFTData !== null && data && Number((Number(ethers.utils.formatEther(NFTData[3])))*(Number(data.pi)+100)/100).toFixed(2) } BUSD</Button>)
                  : NFTData !== null && NFTData[0] && owner !== context.walletAddress.toLowerCase() && 
                  (<Button variant="contained" sx={{ border: '1px solid black', width: '300px' }} onClick={() => {buyNFT(NFTData['tokenId'], NFTData[3])}} >Buy</Button>)
                }
              </Grid>
            </Grid>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Grid
              container
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
              spacing={1}
              mb={2}
            >
              <Grid item xs={12} md={6} >
                <Stack sx={{ border: '2px solid #7414f5', borderRadius: '25px', width: '100%' }}>
                  <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', borderBottom: "1px solid #7414f5" }}>
                    DETAILS
                  </Typography>
                  {/* Contract address */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '30%' }}>
                      Contract Address
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '70%' }}>
                      <a href={`https://testnet.bscscan.com/address/${process.env.REACT_APP_NFT_CONTRACT_ADDRESS}`} target="_blank">
                        {
                          String(process.env.REACT_APP_NFT_CONTRACT_ADDRESS).substring(0, 6) +
                          "..." +
                          String(process.env.REACT_APP_NFT_CONTRACT_ADDRESS).substring(38)
                        }
                      </a>
                    </Typography>
                  </Stack>
                  {/* Token Id */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '30%' }}>
                      Token ID
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '70%' }}>
                      {NFTData !== null && NFTData.tokenId}
                    </Typography>
                  </Stack>
                  {/* Token standard */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '30%' }}>
                      Token standard
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '70%' }}>
                      BEP20
                    </Typography>
                  </Stack>
                  {/* Blockchain */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '30%' }}>
                      Blockchain
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '70%' }}>
                      BSC
                    </Typography>
                  </Stack>
                  {/* Created by */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '30%' }}>
                      Created by
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px', width: '70%' }}>
                      BreedingNFT
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} md={6} >
                <Stack sx={{ border: '2px solid #7414f5', borderRadius: '25px', width: '100%' }}>
                  <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', borderBottom: "1px solid #7414f5" }}>
                    DESCRIPTION
                  </Typography>
                  <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px' }}>
                  {data && data.description}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '25px', mb: 5, textAlign: 'left' }}>
              ACTIVITY
            </Typography>
            <Table NFT={NFTData}/>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
