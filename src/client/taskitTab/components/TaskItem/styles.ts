import {
  ITheme,
  getFocusStyle,
  getTheme,
  mergeStyleSets,
  mergeStyles,
} from "@fluentui/react";

const theme: ITheme = getTheme();
const { palette, fonts } = theme;

export const classNames = mergeStyleSets({
  itemCell: [
    getFocusStyle(theme, { inset: -1 }),
    {
      width: "100%",
      minWidth: "100%",
      minHeight: 54,
      padding: 10,
      boxSizing: "border-box",
      _borderBottom: `1px solid ${palette.themeLight}`,
      get borderBottom() {
        return this._borderBottom;
      },
      set borderBottom(value) {
        this._borderBottom = value;
      },
      display: "flex",
      selectors: {
        "&:hover": { background: palette.themeLight },
      },
      cursor: "pointer",
    },
  ],
  itemImage: {
    flexShrink: 0,
  },
  itemContent: {
    overflow: "hidden",
    flexGrow: 1,
  },
  itemName: [
    fonts.xLarge,
    {
      margin: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  ],
});
