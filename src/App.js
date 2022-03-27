// routes
import Router from 'routes';
// theme
import ThemeConfig from './theme';
// components
// import { switchNetwork } from "utils/wallet";
import useEagerConnect from "hooks/useEagerConnect";

// ----------------------------------------------------------------------


export default function App() {
  useEagerConnect();

  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}
