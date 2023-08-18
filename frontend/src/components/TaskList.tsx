import {
  FocusZone,
  FocusZoneDirection,
  ITheme,
  Icon,
  Image,
  ImageFit,
  List,
  getFocusStyle,
  getRTL,
  getTheme,
  mergeStyleSets,
} from "@fluentui/react";
import { useState } from "react";
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
      borderBottom: `1px solid ${semanticColors.bodyDivider}`,
      display: "flex",
      selectors: {
        "&:hover": { background: palette.neutralLight },
      },
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

interface Task {
  name: string;
  description: string;
}

const onRenderCell = (item?: Task, index?: number | undefined): JSX.Element => {
  return (
    <div className={classNames.itemCell} data-is-focusable={true}>
      <div className={classNames.itemContent}>
        <div className={classNames.itemName}>{item?.name}</div>
        <div>{item?.description}</div>
      </div>
      <Icon
        className={classNames.chevron}
        iconName={getRTL() ? "ChevronLeft" : "ChevronRight"}
      />
    </div>
  );
};

const TaskList = () => {
  const items: Task[] = [
    {
      name: "List 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
    {
      name: "List 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
    {
      name: "List 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
    {
      name: "List 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quisquam explicabo laboriosam quibusdam veritatis odio quo, hic aliquid exercitationem? Suscipit illo sit nesciunt mollitia ex quibusdam. Pariatur quas dolorum perspiciatis.",
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(items);

  return (
    <FocusZone
      direction={FocusZoneDirection.vertical}
      style={{ maxWidth: 500, width: "100%" }}
    >
      <List items={tasks} onRenderCell={onRenderCell} />
    </FocusZone>
  );
};

export default TaskList;
