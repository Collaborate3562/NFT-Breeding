// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import App from './App';
import AppContextProvider from "./contexts/AppContext";


// ----------------------------------------------------------------------

ReactDOM.render(
  <StrictMode>
    <AppContextProvider>
      <Providers >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Providers>
    </AppContextProvider>
  </StrictMode>,
  document.getElementById('root')
);
