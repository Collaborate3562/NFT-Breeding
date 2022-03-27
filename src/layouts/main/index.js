import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { Outlet } from 'react-router-dom';
// material
import { Box, Container, Button, Stack } from '@mui/material';
// components
import Logo from '../../components/Logo';
//
import MainNavbar from './MainNavbar';
import TermsModal from '../terms'
import PrivacyModal from '../privacy'

// ----------------------------------------------------------------------

export default function MainLayout() {

  const [openTerms, setOpenTerms] = useState(false)
  const [openPrivacy, setOpenPrivacy] = useState(false)

  const handleOpenTerms = () => {
    setOpenTerms(true)
  }
  const handleClose = (value) => {
    setOpenTerms(false)
    setOpenPrivacy(false)
  }

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent={'space-between'} alignItems="center">
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
            </ScrollLink>
            <Stack direction="row" spacing={1}>
              <Button variant="text" onClick={() => { setOpenPrivacy(true) }}> Privacy Policy </Button>
              <Button variant="text" onClick={handleOpenTerms}> Terms of Service </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <TermsModal
        open={openTerms}
        onClose={handleClose}
      />

      <PrivacyModal
        open={openPrivacy}
        onClose={handleClose}
      />
    </>
  );
}
