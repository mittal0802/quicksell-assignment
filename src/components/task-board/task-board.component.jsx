import { useContext, useEffect, useState } from "react";
import { AppDataContext } from "../../context/app-data.context";
import TaskCard from "../task-card/task-card.component";

const TaskBoard = () => {
  const { tickets, grouping } = useContext(AppDataContext);

  const [ticketsByStatus, setTicketsByStatus] = useState({});
  const [ticketsByPriority, setTicketsByPriority] = useState({});
  const [ticketsByUser, setTicketsByUser] = useState({});

  useEffect(() => {
    tickets.forEach((ticket) => {
      if (ticket.status in ticketsByStatus) {
        ticketsByStatus[ticket.status].push(ticket);
      } else {
        ticketsByStatus[ticket.status] = [ticket];
      }

      if (ticket.priority in ticketsByPriority) {
        ticketsByPriority[ticket.priority].push(ticket);
      } else {
        ticketsByPriority[ticket.priority] = [ticket];
      }

      if (ticket.userId in ticketsByUser) {
        ticketsByUser[ticket.userId].push(ticket);
      } else {
        ticketsByUser[ticket.userId] = [ticket];
      }
    });
  }, [tickets]);

  return (
    <div className="task-board">
      <TaskCard
        task={{
          id: "CAM-3",
          title: "Optimize Database Queries for Performance",
          tag: ["Feature Request"],
          userId: "usr-2",
          status: "Todo",
          priority: 4,
        }}
      />
    </div>
  );
};

export default TaskBoard;
