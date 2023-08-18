import {
  DefaultPalette,
  IStackItemStyles,
  IStackStyles,
  IStackTokens,
} from "@fluentui/react";

export const taskListStyles: IStackItemStyles = {
  root: {
    alignItems: "start",
    background: DefaultPalette.themeLighter,
    color: DefaultPalette.black,
    display: "flex",
    height: "calc(100vh - 40px)",
    width: "100%",
    justifyContent: "start",
    overflow: "auto",
    padding: "20px 0",
  },
};
export const taskDetailStyles: IStackItemStyles = {
  root: {
    alignItems: "start",
    background: DefaultPalette.themeLighter,
    color: DefaultPalette.black,
    display: "flex",
    height: "calc(100vh - 40px)",
    width: "100%",
    justifyContent: "start",
    overflow: "hidden",
    padding: "20px",
  },
};
export const nonShrinkingStackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "start",
    background: DefaultPalette.themeLighter,
    color: DefaultPalette.black,
    display: "flex",
    height: "calc(100vh - 40px)",
    justifyContent: "start",
    overflow: "hidden",
    width: 350,
    padding: "20px",
  },
};

// Tokens definition
export const innerStackTokens: IStackTokens = {
  childrenGap: 5,
};

export const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeLighterAlt,
    overflow: "hidden",
  },
};
