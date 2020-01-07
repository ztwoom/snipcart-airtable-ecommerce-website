module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#6002EE",
          light: "#EEE5FD"
        },
        secondary: {
          dark: "#EF233C"
        },
        surface: "#F5F5F5",
        "gray-400": "#BDBDBD",
        "blue-500": "#2196F3",
        gold: "#FFC400",
        teal: "#00BFA5",
        "transparent-black": "hsla(0, 0%, 0%, 0.64)"
      },
      minWidth: {
        6: "1.5rem"
      },
      minHeight: {
        85: "21.25rem"
      },
      maxHeight: {
        "screen-90": "90vh"
      },
      maxWidth: {
        85: "21.25rem"
      },
      inset: {
        "-2": "-0.5rem",
        "-1": "-0.25rem",
        "-4": "-1rem"
      },
      spacing: {
        9: "2.25rem",
        xs: "1.125rem",
        75: "18.75rem",
        "4-5": "1.125rem"
      }
    },
    container: {
      center: true,
      padding: "1rem"
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    fontFamily: {
      sans: [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    }
  },
  plugins: [require("./src/plugins/tailwindContainer")]
};
