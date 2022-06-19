import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*Para que nuestra app haga uso de nuestro theme, debemos de agregarla entre theme provider
      y a este le especificamos nuestro archivo theme*/}
      {/*Comentado mientras tanto*/}
      {/*<ThemeProvider theme={theme}>*/}
          <App />
      {/*</ThemeProvider>*/}
  </React.StrictMode>
);
