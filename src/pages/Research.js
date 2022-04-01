import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, TextField, Grid, Button } from '@mui/material';
import useSettings from '../hooks/useSettings';
import { ethers } from "ethers";

import { varFadeInUp, varFadeInRight } from '../components/animate';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Card from '../components/Card_Research'
// Contract
import { useAppContext } from "../contexts/AppContext";
import { formatBigNumber } from 'utils/formatNumber';
import { useSnackbar } from "notistack";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

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

export default function Research() {
  const context = useAppContext();
  // const { onChangeFilterPriceMax, onChangeFilterPriceMin, onChangeFilterPLMax, onChangeFilterPLMin } = useSettings();
  // const { filter_price_max, filter_price_min, filter_pl_min, filter_pl_max } = useState();
  const search_word = useSelector(state => state.search_word)
  const [search, setSearch] = useState("");
  const [priceMax, setPriceMax] = useState(0);
  const [priceMin, setPriceMin] = useState(0);
  const [plMin, setPLMin] = useState(0);
  const [plMax, setPLMax] = useState(0);
  // const { search_word } = useSettings();
  const navigate = useNavigate();

  const applyFilter = async () => {

    const totalSupply = await NFTContract.methods.totalSupply().call();

    const data = []
    for (let i = 1; i <= formatBigNumber(totalSupply); i++) {
      const NFT = await NFTContract.methods.getNFT(i).call();
      if(NFT[0]) {
        NFT.tokenId = i;
        data.push(NFT)
      }
    }

    if (data.length > 0)
      setNFTs(await filter(data))
  }

  const filter = async (items) => {
    var returnData = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      // var res = await fetch(items[i][1]);
      const res = await ( await fetch(items[i][1]) ).json();
      if ((plMax != 0 && Number(res.pi) >= plMin && Number(res.pi) <= plMax) || plMax == 0)
        if ((priceMax != 0 && priceMax >= Number(ethers.utils.formatEther(item[3])) && priceMin <= Number(ethers.utils.formatEther(item[3])) || priceMax == 0))
          if (res.name.toLowerCase().indexOf(search_word.search_word.toLowerCase()) > -1)
            returnData.push(item)
    }

    console.log(returnData, "returnData")
    return returnData;
  }

  const NFTContract = context.NFTContract;
  const [NFTs, setNFTs] = useState(null)
  const { enqueueSnackbar } = useSnackbar();
  const { pathname } = useLocation();

  useEffect(async () => {
    setSearch(search_word.search_word)

    const init = async () => {
      if(NFTContract) {
        const totalSupply = await NFTContract.methods.totalSupply().call();

        const data = []
        for (let i = 1; i <= formatBigNumber(totalSupply); i++) {
          const NFT = await NFTContract.methods.getNFT(i).call();
          if(NFT[0]) {
            NFT.tokenId = i;
            data.push(NFT)
          }
        }
  
        if (data.length > 0)
          setNFTs(await filter(data))
      }
    }
    if(context.walletConnected) {
      init()
    } else {
      navigate('/');
    }
  }, [pathname, search_word, context.walletConnected])

  const handleNew = async() => {
    if(context.walletConnected) {
      const totalSupply = await NFTContract.methods.totalSupply().call();
  
      const data = []
      for (let i = 1; i <= formatBigNumber(totalSupply); i++) {
        const NFT = await NFTContract.methods.getNFT(i).call();
        console.log(i, NFT);
        if(NFT[2]) {
          NFT.tokenId = i;
          data.push(NFT)
        }
      }
      console.log('new', data);
      setNFTs(data)
    }
  }

  const handleResell = async() => {
    if(context.walletConnected) {
      const totalSupply = await NFTContract.methods.totalSupply().call();
  
      const data = []
      for (let i = 1; i <= formatBigNumber(totalSupply); i++) {
        const NFT = await NFTContract.methods.getNFT(i).call();
        if(NFT[4]) {
          NFT.tokenId = i;
          data.push(NFT)
        }
      }
  
      setNFTs(data)
    }
  }

  const handleAll = async() => {
    if(context.walletConnected) {
      const totalSupply = await NFTContract.methods.totalSupply().call();

      const data = []
      for (let i = 1; i <= formatBigNumber(totalSupply); i++) {
        const NFT = await NFTContract.methods.getNFT(i).call();

        if(NFT[0]) {
          NFT.tokenId = i;
          data.push(NFT)
        }
      }

      if (data.length > 0)
        setNFTs(data)
    }
  }

  return (
    <RootStyle id="move_top" initial="initial" animate="animate" variants={varFadeInUp}>
      <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />

      <Container maxWidth="lg">
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'space-between' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
              spacing={3}
            >
              <Grid item xs={12} md={3} sx={{ border: 'solid 1px #7414F5' }} p={2}>
                <Stack direction={'row'} spacing={2} alignItems="center" mb={3} sx={{ borderBottom: "solid 3px #7414f5" }}>
                  <FilterListIcon sx={{ fontSize: '40px' }} />
                  <Typography variant="h4" sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}>Filter</Typography>
                </Stack>

                {/* Price */}
                <Stack spacing={2} sx={{ borderBottom: "solid 3px #7414f5" }} pb={1} mb={3}>
                  <Stack direction="row" alignItems={'center'} spacing={5} justifyContent="space-between">
                    <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>Price</Typography>
                    <ArrowDropDownIcon sx={{ fontSize: '40px' }} />
                  </Stack>
                  <Stack direction="row" alignItems={'center'} spacing={2} justifyContent="space-between">
                    <TextField id="min_price" label="Min" variant="outlined" onChange={(e) => setPriceMin(Number(e.target.value))} value={priceMin} />
                    <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>to</Typography>
                    <TextField id="max_price" label="Max" variant="outlined" onChange={(e) => setPriceMax(Number(e.target.value))} value={priceMax} />
                  </Stack>
                </Stack>

                {/* P.I. */}
                <Stack spacing={2} sx={{ borderBottom: "solid 3px #7414f5" }} pb={1} mb={3}>
                  <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>P.I.</Typography>
                  <Stack direction="row" alignItems={'center'} spacing={2} justifyContent="space-between">
                    <TextField id="min_price" label="Min" variant="outlined" onChange={(e) => {setPLMin(Number(e.target.value))}} value={plMin}/>
                    <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>to</Typography>
                    <TextField id="max_price" label="Max" variant="outlined"  onChange={(e) => {setPLMax(Number(e.target.value))}} value={plMax}/>
                  </Stack>
                </Stack>

                {/* Status P.I. */}
                <Stack spacing={2} sx={{ borderBottom: "solid 3px #7414f5" }} pb={1} mb={3}>
                  <Button variant="contained" sx={{ background: "white", color: 'black' }} onClick={handleNew}>New</Button>
                  <Button variant="contained" sx={{ background: "white", color: 'black' }} onClick={handleResell}>Reselled</Button>
                  <Button variant="contained" sx={{ background: "white", color: 'black' }} onClick={handleAll}>All</Button>
                </Stack>

                {/* Apply */}
                <Stack spacing={2} mb={2}>
                  <Button variant="contained" sx={{ border: '1px solid black' }} onClick={applyFilter}>Apply</Button>
                </Stack>
              </Grid>

              <Grid item xs={12} md={9}>
                <Stack direction={'row'} flexWrap={'wrap'} alignItems="center" justifyContent={'center'}>
                  {
                    NFTs && NFTs.map((NFT, i) => (
                      <motion.div variants={varFadeInUp} key={i}>
                        <Card NFT={NFT} />
                      </motion.div>
                    ))
                  }
                </Stack >
              </Grid>
            </Grid>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}