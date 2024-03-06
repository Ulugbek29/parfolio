import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#8750F7",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#804BEB",
        contrastText: "#ffffff"
      },
      background: {
        default: "#050709",
      }
    } : {
      primary: {
        main: "#ff0000"
      },
      secondary: {
        main: "#f44336"
      },
      background: {
        default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
    });
  }
};

export default themeConfigs;