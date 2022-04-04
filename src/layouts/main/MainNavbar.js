import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Container, Hidden, TextField, InputAdornment } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import { useState } from 'react'

import ConnectWalletButton from 'components/DappComponents/ConnectWalletButton';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

import SearchIcon from '@mui/icons-material/Search';
import useSettings from '../../hooks/useSettings';
import { useDispatch } from 'react-redux';
import { useAppContext } from "../../contexts/AppContext";
import { useSnackbar } from "notistack";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const context = useAppContext();
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  // const { searchWord, setSeachWord } = useState();
  const dispatch = useDispatch()

  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          // maxWidth="100%"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>


          <Hidden mdDown>
            <TextField
              id="input-with-icon-textfield"
              placeholder='Find NFTs..'
              onChange={(e) => { if(isHome || !context.walletConnected) { enqueueSnackbar("Please connect the wallet and go to the RESEARCH page to find NFT.", { variant: "error" }); return; } dispatch({type: "SEARCH_WORD", payload: e.target.value}) }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />

            <ConnectWalletButton />
          </Hidden>

          <Hidden mdUp>
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </Hidden>

        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
