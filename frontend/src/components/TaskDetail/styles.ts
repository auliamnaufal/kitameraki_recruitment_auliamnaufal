import { IStackStyles, IStackTokens, ITheme, createTheme } from "@fluentui/react";

export const innerStackTokens: IStackTokens = {
  childrenGap: 10,
};

export const stackStyles: IStackStyles = {
  root: {
    overflow: "hidden",
    width: "100%",
  },
};

export const dangerButtonTheme: ITheme = createTheme({
  palette: {
    themePrimary: "#f72a2a",
    themeLighterAlt: "#fff6f6",
    themeLighter: "#fedcdc",
    themeLight: "#fdbebe",
    themeTertiary: "#fa7e7e",
    themeSecondary: "#f84343",
    themeDarkAlt: "#df2626",
    themeDark: "#bc2020",
    themeDarker: "#8b1818",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#b4b4b4",
    neutralSecondary: "#9b9b9b",
    neutralPrimaryAlt: "#838383",
    neutralPrimary: "#212121",
    neutralDark: "#525252",
    black: "#3a3a3a",
    white: "#ffffff",
  },
});