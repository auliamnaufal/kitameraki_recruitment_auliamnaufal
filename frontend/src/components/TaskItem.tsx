import {
  ITheme,
  getFocusStyle,
  getTheme,
  mergeStyleSets,
} from "@fluentui/react";
import { Task } from "../App";

const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;

const classNames = mergeStyleSets({
  itemCell: [
    getFocusStyle(theme, { inset: -1 }),
    {
      width: "100%",
      minWidth: "100%",
      minHeight: 54,
      padding: 10,
      boxSizing: "border-box",
      _borderBottom: `1px solid ${semanticColors.bodyDivider}`,
      get borderBottom() {
        return this._borderBottom;
      },
      set borderBottom(value) {
        this._borderBottom = value;
      },
      display: "flex",
      selectors: {
        "&:hover": { background: palette.neutralLight },
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
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  ],
  itemIndex: {
    fontSize: fonts.small.fontSize,
    color: palette.neutralTertiary,
    marginBottom: 10,
  },
  chevron: {
    alignSelf: "center",
    marginLeft: 10,
    color: palette.neutralTertiary,
    fontSize: fonts.large.fontSize,
    flexShrink: 0,
  },
});

interface Props {
  item: Task;
  onSelected: (id: number) => void;
}

const TaskItem = ({ item: { id, name, description }, onSelected }: Props) => {
  return (
    <div
      onClick={() => onSelected(id)}
      className={classNames.itemCell}
      data-is-focusable={true}
    >
      <div className={classNames.itemContent}>
        <div className={classNames.itemName}>{name}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default TaskItem;
