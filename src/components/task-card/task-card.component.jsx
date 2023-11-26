const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-title">{task.title}</div>
      <div className="task-status">{task.status}</div>
      <div className="task-priority">{task.priority}</div>
      <div className="task-user">{task.user}</div>
    </div>
  );
};
export default TaskCard;
