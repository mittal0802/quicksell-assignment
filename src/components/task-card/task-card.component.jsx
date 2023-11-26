import { useContext, useEffect, useState } from "react";
import "./task-card.styles.scss";
import { AppDataContext } from "../../context/app-data.context";
import StatusIcon from "../status-icon/status-icon.component";
import ImageIcon from "../image-icon/image-icon.component";
import PriorityIcon from "../priority-icon/priority-icon.component";
import TagBox from "../tag-box/tag-box.component";

const TaskCard = ({ task }) => {
  const { grouping } = useContext(AppDataContext);
  const { id, priority, status, title, userId, tag } = task;
  return (
    <div className="task-card">
      <div className="task-details">
        <div className="task-id">{id}</div>
        <div className="task-stat-title">
          {grouping !== "status" && <StatusIcon status={status} />}
          <div className="task-title">{title}</div>
        </div>
        <div className="task-priority-tag">
          {grouping !== "priority" && <PriorityIcon priority={priority} />}
          <TagBox tagTitle={tag} />
        </div>
      </div>
      {grouping !== "user" && <ImageIcon userId={userId} />}
    </div>
  );
};
export default TaskCard;
