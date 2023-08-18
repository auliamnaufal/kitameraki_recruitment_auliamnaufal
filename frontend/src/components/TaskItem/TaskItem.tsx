import { Task } from "../../App";
import { classNames } from "./styles";

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
