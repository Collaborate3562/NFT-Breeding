import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, TextField, Grid, Button } from '@mui/material';
//
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
  return (
    <RootStyle id="move_top" initial="initial" animate="animate" variants={varFadeInUp}>
      <HeroOverlayStyle alt="overlay" src="/img/overlay.svg" variants={varFadeInUp} />

      <Container maxWidth="lg">
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Grid
              container
              direction="row"
              alignItems="center"
              sx={{ textAlign: { xs: 'center', md: 'left' }, border: "2px solid #7414f5", borderRadius: '10px' }}
            >
              <Grid item xs={12} md={6} sx={{ borderRight: "1px solid #7414f5" }}>
                <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', textAlign: 'center', fontWeight: 'bold' }}>
                  UPLOAD NFT BOUGHT FROM BREEDINGNFT
                </Typography>
              </Grid>

              {/* <Divider orientation="vertical" flexItem sx={{ borderColor: "#7414F5" }} /> */}

              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ fontFamily: 'MontserratItalic', textAlign: 'center', color: "#7414f5", mt: 0 }}
                  label="Paste here contract address from your wallet"
                  type="search"
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Grid
              container
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={6} p={2}>
                <img src="/img/resell/NFT.png" alt="NFt" style={{width: '100%', height: '100%'}} />
              </Grid>

              <Grid item xs={12} md={6} mt={3}>
                <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '25px', mb: 5 }}>
                  Sad monkey
                </Typography>
                {/* Price */}
                <Stack sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: {xs: '100%', md: '300px'}, mb: 5 }} >
                  <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', borderBottom: "1px solid #7414f5" }}>
                    RESELL PRICE
                  </Typography>
                  <Typography sx={{ p: 1, color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px' }}>
                    124,41 BUSD
                  </Typography>
                </Stack>
                {/* P.I. */}
                <Stack direction="row" spacing={13} sx={{ border: '2px solid #7414f5', borderRadius: '10px', width: {xs: '100%', md: '300px'}, mb: 5 }} alignItems="center">
                  <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', p: '10px', borderRight: "1px solid #7414f5", width: "150px" }}>
                    P.I.
                  </Typography>
                  <Typography sx={{ color: '#7414f5', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px' }}>
                    20%
                  </Typography>
                </Stack>
                {/* Resell button */}
                <Button variant="contained" sx={{ border: '1px solid black', width: '300px' }}>RESELL FOR 124,41 BUSD</Button>
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
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      Contract Address
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      0x465...ecc
                    </Typography>
                  </Stack>
                  {/* Token Id */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      Token ID
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      123456
                    </Typography>
                  </Stack>
                  {/* Token standard */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      Token standard
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      BEP20
                    </Typography>
                  </Stack>
                  {/* Blockchain */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      Blockchain
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      BSC
                    </Typography>
                  </Stack>
                  {/* Created by */}
                  <Stack direction="row" spacing={10}>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
                      Created by
                    </Typography>
                    <Typography sx={{ p: 1, color: 'common.white', fontFamily: 'Montserrat', fontSize: '15px' }}>
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
                    A monkey etc...
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Typography sx={{ color: 'common.white', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '25px', mb: 5, textAlign: 'left' }}>
              ACTIVITY
            </Typography>
            <Table />
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
