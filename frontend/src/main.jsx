import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {ModalsProvider} from "@mantine/modals";
import theme from "./theme.js";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import {Notifications} from "@mantine/notifications";
import '@mantine/dates/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <MantineProvider theme={theme}>
              <ModalsProvider>
                  <Notifications/>
                  <App/>
              </ModalsProvider>
          </MantineProvider>
      </BrowserRouter>
  </React.StrictMode>,
)