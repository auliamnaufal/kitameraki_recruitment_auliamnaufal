import { FocusZone, FocusZoneDirection } from "@fluentui/react";
import TaskItem from "../TaskItem/TaskItem";
import { Task } from "../../App";

interface Props {
  tasks: Task[];
  onSelected: (id: number) => void;
}

const TaskList = ({ tasks, onSelected }: Props) => {
  return (
    <FocusZone
      direction={FocusZoneDirection.vertical}
      style={{ width: "100%" }}
    >
      <div>
        {tasks.map((item) => (
          <TaskItem key={item.id} item={item} onSelected={onSelected} />
        ))}
      </div>
    </FocusZone>
  );
};

export default TaskList;
