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
      margin: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  ],
});

interface Props {
  item: Task;
  onSelected: (id: number) => void;
}

const descriptionLength: number = 100;

const TaskItem = ({ item: { id, name, description }, onSelected }: Props) => {
  return (
    <div
      onClick={() => onSelected(id)}
      className={classNames.itemCell}
      data-is-focusable={true}
    >
      <div className={classNames.itemContent}>
        <h3 className={classNames.itemName}>{name}</h3>
        <p style={{ margin: "5px 0 0 0" }}>
          {description.length > descriptionLength
            ? description.slice(0, descriptionLength) + "..."
            : description}
        </p>
      </div>
    </div>
  );
};

export default TaskItem;
