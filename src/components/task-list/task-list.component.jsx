import "./task-list.styles.scss";
import TaskCard from "../task-card/task-card.component";
import { Fragment, useContext } from "react";
import { AppDataContext } from "../../context/app-data.context";
import ImageIcon from "../image-icon/image-icon.component";
import StatusIcon from "../status-icon/status-icon.component";
import PriorityIcon from "../priority-icon/priority-icon.component";
import { FaPlus } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const priorityName = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const TaskList = ({ tasks, taskKey }) => {
  const { grouping, ordering, users } = useContext(AppDataContext);

  const userName =
    grouping == "user" ? users.find((user) => user.id === taskKey).name : null;

  if (ordering === "title") {
    tasks.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    });
  } else if (ordering === "priority") {
    tasks.sort((a, b) => {
      return b.priority - a.priority;
    });
  }

  return (
    <div className="task-list">
      <div className="task-list-header">
        <div className="task-list-title">
          {grouping === "user" && (
            <Fragment>
              <ImageIcon userId={taskKey} />
              <span>{userName}</span>
            </Fragment>
          )}
          {grouping === "status" && (
            <Fragment>
              <StatusIcon status={taskKey} />
              <span>{taskKey}</span>
            </Fragment>
          )}
          {grouping === "priority" && (
            <Fragment>
              <PriorityIcon priority={tasks[0].priority} />
              <span>{priorityName[tasks[0].priority]}</span>
            </Fragment>
          )}
          <span className="task-length">{tasks.length}</span>
        </div>
        <div className="more-options">
          <FaPlus />
          <HiOutlineDotsHorizontal />
        </div>
      </div>
      {tasks.map((ticket) => (
        <TaskCard key={ticket.id} task={ticket} />
      ))}
    </div>
  );
};

export default TaskList;
