import { useContext, useEffect, useState } from "react";
import { AppDataContext } from "../../context/app-data.context";
import "./task-board.styles.scss";
import TaskList from "../task-list/task-list.component";

const TaskBoard = () => {
  const { tickets, grouping } = useContext(AppDataContext);

  const [ticketsByStatus, setTicketsByStatus] = useState({});
  const [ticketsByPriority, setTicketsByPriority] = useState({});
  const [ticketsByUser, setTicketsByUser] = useState({});

  useEffect(() => {
    let ticketsStatus = {
      Backlog: [],
      Todo: [],
      "In progress": [],
      Done: [],
      Cancelled: [],
    };
    let ticketsPriority = {};
    let ticketsUser = {};

    tickets.forEach((ticket) => {
      if (ticket.status in ticketsStatus) {
        ticketsStatus[ticket.status].push(ticket);
      } else {
        ticketsStatus[ticket.status] = [ticket];
      }

      if (ticket.priority in ticketsPriority) {
        ticketsPriority[ticket.priority].push(ticket);
      } else {
        ticketsPriority[ticket.priority] = [ticket];
      }

      if (ticket.userId in ticketsUser) {
        ticketsUser[ticket.userId].push(ticket);
      } else {
        ticketsUser[ticket.userId] = [ticket];
      }
    });

    setTicketsByPriority(ticketsPriority);
    setTicketsByStatus(ticketsStatus);
    setTicketsByUser(ticketsUser);
  }, [tickets]);

  return (
    <div className="task-board">
      {grouping === "status" &&
        Object.keys(ticketsByStatus).map((key) => (
          <TaskList key={key} tasks={ticketsByStatus[key]} taskKey={key} />
        ))}
      {grouping === "priority" &&
        Object.keys(ticketsByPriority).map((key) => (
          <TaskList key={key} tasks={ticketsByPriority[key]} taskKey={key} />
        ))}
      {grouping === "user" &&
        Object.keys(ticketsByUser).map((key) => (
          <TaskList key={key} tasks={ticketsByUser[key]} taskKey={key} />
        ))}
    </div>
  );
};

export default TaskBoard;
