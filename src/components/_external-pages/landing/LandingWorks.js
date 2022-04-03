import { React, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Divider, Grid } from '@mui/material';
//
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../../animate';
import nftAbi from "../../../contracts/abi/NFTAbi.json";
import Web3 from "web3";

import ReactPlayer from 'react-player'

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
  paddingTop: theme.spacing(5),
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

export default function LandingWorks() {
  const [videoUrl, setVideoUrl] = useState("");

  let web3 = new Web3(Web3.givenProvider || 'https://data-seed-prebsc-1-s1.binance.org:8545/');

  useEffect(() => {
    const init = async() => {
      const nftContract = await new web3.eth.Contract(nftAbi, process.env.REACT_APP_NFT_CONTRACT_ADDRESS);
      const uri = await nftContract.methods.getVideoUrl().call();
      console.log('videourl', uri);
      setVideoUrl(uri);
    }
    init();
  }, []);
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Stack justifyContent="space-between" spacing={5} alignItems="center">
                <Typography sx={{ color: 'common.white', fontSize: '25px', fontFamily: 'MontserratItalic' }}>
                  How Breeding NFT works?
                </Typography>
                  <ReactPlayer
                    url={videoUrl}
                    playing={true}
                    controls={true}
                    light={true}
                    loop={true}
                    width="100%"
                    height="600px"
                  />
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Grid container direction="row" spacing={3} alignItems="flex-start" justifyContent={'center'}>
                {/* Reasearch */}
                <Grid item xs={12} md={4}>
                  <Stack justifyContent={'center'} spacing={1}>
                    <img src='/img/home/research.png' alt='research' style={{ width: '60px', margin: 'auto' }} />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontSize: "20px", fontWeight: "bold" }}>
                      1. Research
                    </Typography>
                    <br />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: "left" }}>
                      Search among the numerous NFTs and choose basing on the <b style={{ color: "#7414F5" }}>price</b> and the <b style={{ color: "#7414F5" }}>P.I.</b> (Price Increase)
                    </Typography>
                    <br />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: "left" }}>
                      P.I. is the percentage of price increase
                    </Typography>
                  </Stack>
                </Grid>

                {/* Buy */}
                <Grid item xs={12} md={4}>
                  <Stack justifyContent={'center'} spacing={1}>
                    <img src='/img/home/buy.png' alt='buy' style={{ width: '60px', margin: 'auto' }} />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontSize: "20px", fontWeight: "bold" }}>
                      2. Buy
                    </Typography>
                    <br />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: "left" }}>
                      Connect your wallet and buy the NFT you have chosen.
                    </Typography>
                    <br />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: "left" }}>
                      You may find NFT breeders interested in another P.I. for their <b style={{ color: "#7414f5" }}>next sale.</b>
                    </Typography>
                  </Stack>
                </Grid>

                {/* Resell */}
                <Grid item xs={12} md={4}>
                  <Stack justifyContent={'center'} spacing={1}>
                    <img src='/img/home/resell.png' alt='resell' style={{ width: '60px', margin: 'auto' }} />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontSize: "20px", fontWeight: "bold" }}>
                      3. Resell
                    </Typography>
                    <br />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: "left" }}>
                      By participating in the <b style={{ color: "#7414f5" }}>ecosystem</b> and reselling through BreedingNFT, you can constantly replenish your cryptocurrency wallet.
                    </Typography>
                    <br />
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: "left" }}>
                      This is breeding of <b style={{ color: "#7414f5" }}>NFTs!</b>
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Stack justifyContent="space-between" spacing={5} alignItems="center">
                <Typography sx={{ color: 'common.white', fontSize: '20px', fontFamily: 'Montserrat', fontWeight: 500 }}>
                  What are you waiting for ? Breed NFTs now with Our Community!
                </Typography>
              </Stack>
            </motion.div>
          </ContentStyle>
          <Divider sx={{ borderColor: "#7414F5" }} />
        </Container>
      </RootStyle>
      {/* <Box sx={{ height: { md: '100vh' } }} /> */}
    </>
  );
}
