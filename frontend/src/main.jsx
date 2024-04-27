import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import theme from "./theme.js";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <MantineProvider theme={theme}>
              <App/>
          </MantineProvider>
      </BrowserRouter>
  </React.StrictMode>,
)