import { createMuiTheme } from "@material-ui/core";

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#444444",
    },
    background: {
      paper: "#e1e1e1",
      default: "#ffffff",
    },
    text: {
      primary: "#2f516d",
      secondary: "#899bb2",
    },
  },
  shape: {
    borderRadius: 0,
  },
});
