// material
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page";
import { LandingHero } from "../components/_external-pages/landing";
import { LandingWorks } from "../components/_external-pages/landing";
import { LandingMeaning } from "../components/_external-pages/landing";
import { LandingFaq } from "../components/_external-pages/landing";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: "100%",
});
// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle id="move_top">
      <LandingHero />
      <LandingWorks />
      <LandingMeaning />
      <LandingFaq />
    </RootStyle>
  );
}
