import { createContext, useState } from "react";

export const AppDataContext = createContext({
  users: [],
  tickets: [],
  grouping: null,
  ordering: null,
  setOrdering: () => null,
  setGrouping: () => null,
  setUsers: () => null,
  setTickets: () => null,
});

export const AppDataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const value = {
    users,
    tickets,
    grouping,
    ordering,
    setOrdering,
    setGrouping,
    setUsers,
    setTickets,
  };

  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};
export default AppDataContext;
