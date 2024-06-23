import {createTheme} from "@mantine/core";

export default createTheme({
    fontFamily: 'Karla, sans-serif',

    //I have darkened the shadows to make them visible, but they might be too small.
    shadows: {
        xs: '0.5px 0.5px 3px rgba(0, 0, 0, .2)',
        sm: '2px 2px 3px rgba(0, 0, 0, .2)',
        md: '4px 4px 3px rgba(0, 0, 0, .2)',
        lg: '6px 6px 3px rgba(0, 0, 0, .2)',
        xl: '8px 8px 3px rgba(0, 0, 0, .2)',
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
            "#392f88"
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

    primaryColor: 'aprai-purple',

    components: {
        Title: {
            defaultProps: {
                c: 'aprai-purple.8'
            }
        },
        Button: {
            //I think we should configure this with primary-color
            // defaultProps: {
            //     bg: 'aprai-purple.9'
            // }
        }
    }
});