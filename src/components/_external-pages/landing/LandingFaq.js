import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Divider, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
//
import { varFadeInUp, varFadeInRight } from '../../animate';

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

export default function LandingFaq() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varFadeInUp}>
      <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Stack justifyContent="space-between" spacing={5} alignItems="center">
                <Typography sx={{ color: 'common.white', fontSize: '25px', fontFamily: 'MontserratItalic', fontWeight: 'bold' }}>
                  FAQs
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start">
                <Grid
                  container
                  justifyContent={{ xs: 'center', md: 'space-between' }}
                  sx={{ textAlign: { xs: 'center', md: 'left' } }}
                  spacing={3}
                >
                  <Grid item xs md sx={{ mb: 3 }}>
                    {/* 1 ~ 5 */}
                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        1. Is Breeding NFT easy to use?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        BreedingNFT was designed to be intuitive, simple and fast. You can watch the video tutorial on the homepage that explains how it works
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        2. Can Breeding NFT go on any devices?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        The platform works on both PC and smartphone.
                        If you will use the PC, you will have to connect Metamask, while if you will use your smartphone you will have to connect TrustWallet
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        3. Why buy/resell on Breeding NFT?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        By buying and selling NTFs on Breeding FT, it will securely guarantee you the P.I. (Price Increase)
                        No other platform can guarantee this and for this reason we strongly advise you to
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        4. How do I contact BreedingNFT Customer Service?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        You can contact us via social networks and we will reply as soon as possible.
                        You can find our social pages by clicking on the icons at the top of the homepage.
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        5. How can I buy and resell NFT?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        The only way to buy and sell an NFT on the platform is to own and link a Metamask wallet or Trustwallet.
                        Watch the video tutorial to perform the necessary steps
                      </Typography>
                      <br />
                  </Grid>

                  <Divider orientation="vertical" flexItem sx={{ borderColor: "#7414F5" }} />

                  <Grid item xs md sx={{ mb: 3 }}>
                    {/* 6 ~ 10 */}
                    {/* <Stack spacing={1} alignItems={'flex-start'}> */}
                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        6. What percentage can I resell my NFT?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        You will be able to resell NFTs at a single percentage called P.I.
                        You can see it in the NFT datasheet, both when you buy and when you sell.
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        7. Which NFTs can I resell?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        You will only be able to buy and sell NTFs created by Breeding NFT.
                        You will not be able to sell your NFTs.
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        8. How long does it take to resell a NFT?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        Resale duration may vary and the price can affect it.
                        It is important to buy and sell NFTs through BreedingNFT to ensure you earn the P.I.
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        9. Which cryptocurrencies and wallets are accepted?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        Currently only BUSD are accepted using the Binance Smart Chain (BSC).
                        Make sure you have added BSC network to your wallets.
                      </Typography>
                      <br />

                      <Link component={RouterLink} to="#" sx={{fontWeight: 'bold', fontStyle: 'italic', color: 'common.white', fontFamily: 'Montserrat' }}>
                        10. How can I change my cryptocurrencies for buy here?
                      </Link>
                      <br />
                      <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'left' }}>
                        You can buy BUSD on centralized exchanges such as Binance, FTX, Gate.io, WazirX and MEXC or you can convert crypto you already own into BUSD with the main decentralized exchanges such as Uniswap, 1inch, Curve Finance, Ellipsis, MDEX, SushiSwap, 0x and many more.
                      </Typography>
                      <br />
                    {/* </Stack> */}
                  </Grid>
                </Grid>
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
