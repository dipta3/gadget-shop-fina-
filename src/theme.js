import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#AFE1AF",
    },
    secondary: {
      main: "#03B0D6",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
