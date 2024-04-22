import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {createTheme, MantineProvider, Title} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const theme = createTheme({
    fontFamily: 'Karla, sans-serif',

    //TODO darken shadows
    shadows: {
        xs: '0.5px 0.5px 3px rgba(0, 0, 0, .5)',
        sm: '2px 2px 3px rgba(0, 0, 0, .5)',
        md: '4px 4px 3px rgba(0, 0, 0, .5)',
        lg: '6px 6px 3px rgba(0, 0, 0, .5)',
        xl: '8px 8px 3px rgba(0, 0, 0, .5)',
    },

    colors: {
        'aprai-purple': [
            "#f1f0fa",
            "#deddee",
            "#bbb6de",
            "#A9ABC9",
            "#766ac2",
            "#6255bc",
            "#584ab9",
            "#493ba3",
            "#403592",
            "#362d81"
        ],
        'aprai-green': [
            "#e8fdf1",
            "#d7f6e4",
            "#b4f3cf",
            "#87dfad",
            "#63d593",
            "#4dcf83",
            "#3fcc7b",
            "#2fb469",
            "#24a05c",
            "#0e8a4c"
        ],
        'aprai-blue': [
            "#e7fbfb",
            "#dcf1ee",
            "#bcdfdc",
            "#98cdc8",
            "#7bbdb8",
            "#68b3ad",
            "#5cb0a8",
            "#499a93",
            "#3c8982",
            "#267771"
        ]
    },

    components: {
        Title: {
            defaultProps: {
                c: 'aprai-purple.8'
            }
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <MantineProvider theme={theme}>
              <App/>
          </MantineProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
