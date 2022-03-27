import { React, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, TextField, Grid, Button } from '@mui/material';
//
import { varFadeInUp } from '../components/animate';
import { useAppContext } from "../contexts/AppContext";
import Card from '../components/Card_Assets'
// Contract
import { formatBigNumber } from 'utils/formatNumber';

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
  paddingTop: theme.spacing(15),
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

export default function Assets() {
  const context = useAppContext();
  const navigate = useNavigate();

  const account = context.walletAddress;
  const nftContract = context.NFTContract;

  const [NFTs, setNFTs] = useState(null)
  const { pathname } = useLocation();

  useEffect(() => {
    const init = async () => {
      if(nftContract === null) {
        navigate('/');
        return;
      }
      const tokenIds = await nftContract.methods.tokensOfOwner(account).call();

      const data = []
      for (var i = 0; i < tokenIds.length; i++) {
        const NFT = await nftContract.methods.getNFT(formatBigNumber(tokenIds[i])).call();
        NFT.tokenId = tokenIds[i];
        data.push(NFT);
      }
      if (data.length)
        setNFTs(data)
    }
    if(context.walletConnected) {
      init();
    }
  }, [context.walletConnected])

  return (
    <RootStyle id="move_top" initial="initial" animate="animate" variants={varFadeInUp}>
      <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />

      <Container maxWidth="lg">
        <ContentStyle>
          <Typography variant="h1">
            My Assets
          </Typography>
          <Stack direction={'row'} flexWrap={'wrap'} alignItems="center" justifyContent={'center'}>
            {
              NFTs ? NFTs.map((NFT, i) => (
                  <motion.div variants={varFadeInUp} key={i}>
                    <Card NFT={NFT} />
                  </motion.div>
                )) :
                <Typography variants="h4">
                  There is no NFT in your account!
                </Typography>
            }
          </Stack >
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
