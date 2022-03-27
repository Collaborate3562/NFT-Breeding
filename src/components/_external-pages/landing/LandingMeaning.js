import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Divider } from '@mui/material';
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

export default function LandingMining() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varFadeInUp}>
      <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Stack justifyContent="space-between" spacing={5} alignItems="center">
                <Typography sx={{ color: 'common.white', fontSize: '25px', fontFamily: 'MontserratItalic', fontWeight: 'bold' }}>
                  What does it means to breed NFTs?
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Stack direction="row" spacing={3} justifyContent="space-around" alignItems="flex-start">
                {/* Reasearch */}
                <Stack justifyContent={'center'} spacing={1}>
                  <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat' }}>
                    It mean the continuous process of<br /> buying and selling a Not Fungible<br /> Tokens  <b style={{color: "#7414F5"}}>keeping the price increase<br /> constant at each resale.</b>
                  </Typography>
                  <br />
                  <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat' }}>
                    For each NFT purchased and resold,<br /> <b style={{color: "#7414F5"}}>the price always goes up</b> and never<br /> goes down.
                  </Typography>
                </Stack>

                {/* Resell */}
                <Stack justifyContent={'center'} spacing={1}>
                  <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat' }}>
                    With each resale, you will <b style={{color: "#7414f5"}}>earn the<br /> P.I on the purchase price.</b>
                  </Typography>
                  <br />
                  <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat' }}>
                    For example, if you buy a 100 BUSD <br/> NFT with P.I. at 20%, you will resell it<br /> for 120 BUSD to <b style={{color: "#7414f5"}}>another NFT<br /> breeder interested</b> in marketing an<br/> additional P.I. for its future resale.
                  </Typography>
                </Stack>
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
