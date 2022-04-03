import { React, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, TextField, Grid, Button, Divider } from '@mui/material';
//
import { varFadeInUp, varFadeInRight } from '../components/animate';
import { useAppContext } from "../contexts/AppContext";
import { useSnackbar } from "notistack";

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

const ContentStyle = styled((props) => <Stack spacing={15} justifyContent="space-between" {...props} />)(({ theme }) => ({
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

export default function Dashboard() {
  const [earnedFromRoyalty, setEarnedFromRoyalty] = useState(0);
  const [totalNewNFTSold, setTotalNewNFTSold] = useState(0);
  const [earnedFromNewNFT, setEarnedFromNewNFT] = useState(0);
  const [reselledAmount, setReselledAmount] = useState(0);
  const [url, setUrl] = useState("");

  const context = useAppContext();
  const { enqueueSnackbar } = useSnackbar();
  
  const navigate = useNavigate();
  const adminAddress = process.env.REACT_APP_DAVIDE_WALLET;
  const account = context.walletAddress;
  const walletConnected = context.walletConnected;

  const handleNavigate  = () => {
    navigate('/dashboard/minting');
  }
  useEffect(() => {
    const init = async () => {
      const nftContract = context.NFTContract;
      
      const _earnedFromRoyalty = await nftContract.methods.getEarnedFromRoyalty().call();
      const _totalNewNFTSold = await nftContract.methods.getTotalNewNFTSold().call();
      const _earnedFromNewNFT = await nftContract.methods.getEarnedFromNewNFT().call();
      const _reselledAmount = await nftContract.methods.getResellAmount().call();

      setEarnedFromRoyalty(Number(ethers.utils.formatEther(String(Number(_earnedFromRoyalty)))));
      setTotalNewNFTSold(Number(_totalNewNFTSold));
      setEarnedFromNewNFT(Number(ethers.utils.formatEther(String(Number(_earnedFromNewNFT)))));
      setReselledAmount(Number(_reselledAmount));
    }

    if(context.walletConnected) {
      init();
    }
  }, [])

  const handleChangeUrl = async() => {
    if(url === "") {
      enqueueSnackbar("Please insert Url.", {
        variant: "error"
      })
    }

    const nftContract = context.NFTContract;

    await nftContract.methods.setVideoUrl(url).send({from: context.walletAddress});
    enqueueSnackbar("Video URI successfully changed.", {
      variant: "success",
    });
  }

  return (
    <>
      {walletConnected && adminAddress === account &&
        <RootStyle id="move_top" initial="initial" animate="animate" variants={varFadeInUp}>
          <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />
          <Container maxWidth="lg">
            <ContentStyle>
              {/* NFTs sold */}
              <motion.div variants={varFadeInRight}>
                <Grid
                  container
                  justifyContent={{ xs: 'center', md: 'space-between' }}
                  alignItems="center"
                  sx={{ textAlign: { xs: 'center', md: 'left' } }}
                  spacing={3}
                >
                  <Grid item xs md p={2}>
                    <Stack alignItems="center" justifyContent={'center'}>
                      <Stack sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: { xs: '100%', }, mb: 5 }}>
                        <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px', borderBottom: "1px solid #7414f5" }}>
                          NEW NFTs SOLD
                        </Typography>
                        <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }}>
                          {totalNewNFTSold}
                        </Typography>
                      </Stack>
                      <Stack sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: { xs: '100%', }, mb: 5 }}>
                        <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px', borderBottom: "1px solid #7414f5" }}>
                          EARNING FROM NEW NFTs SOLD
                        </Typography>
                        <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }}>
                          { Number(earnedFromNewNFT).toFixed(2) } BUSD
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>

                  <Divider orientation="vertical" flexItem sx={{ borderColor: "#7414F5" }} />

                  <Grid item xs md p={2}>
                    <Stack alignItems="center" justifyContent={'center'}>
                      <Stack sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: { xs: '100%', }, mb: 5 }}>
                        <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px', borderBottom: "1px solid #7414f5" }}>
                          RESELLED NFTs
                        </Typography>
                        <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }}>
                          {reselledAmount}
                        </Typography>
                      </Stack>
                      <Stack sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: { xs: '100%', }, mb: 5 }}>
                        <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px', borderBottom: "1px solid #7414f5" }}>
                          EARNING FROM ROYALTIES
                        </Typography>
                        <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }}>
                          { Number(earnedFromRoyalty).toFixed(2) } BUSD
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </motion.div>

              {/* Search */}
              <motion.div variants={varFadeInRight}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  sx={{ textAlign: { xs: 'center', md: 'left' }, border: "2px solid #7414f5", borderRadius: '10px' }}
                >
                  <Grid item xs={12} md={5} sx={{ borderRight: "1px solid #7414f5" }}>
                    <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'center', fontWeight: 'bold' }}>
                      LINK FOR VIDEO TUTORIAL
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <TextField
                      sx={{ fontFamily: 'MontserratItalic', textAlign: 'center', color: "#7414f5", mt: 0 }}
                      label="Paste here..."
                      type="search"
                      fullWidth
                      variant="standard"
                      onChange={(e) => {setUrl(e.target.value)}}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} sx={{textAlign: 'center'}}>
                    <Button variant="contained" sx={{ border: '1px solid black' }} onClick={handleChangeUrl}>CHANGE URL</Button>
                  </Grid>
                </Grid>
              </motion.div>

              {/* BUTTON */}
              <motion.div variants={varFadeInRight}>
                <Button onClick={handleNavigate} variant="contained" sx={{ border: '1px solid black' }}>GOT TO MINTING/PUBLISH SECTION</Button>
              </motion.div>
            </ContentStyle>
          </Container>
        </RootStyle>
      }
    </>
  );
}
