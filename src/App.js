import "./App.css";
import { Suspense, lazy, useEffect, useState, useContext } from "react";
import Navbar from "./components/navbar/navbar.component";
import { AppDataContext } from "./context/app-data.context";

const TaskBoard = lazy(() =>
  import("./components/task-board/task-board.component")
);

function App() {
  const [appData, setAppData] = useState(null);
  const { setTickets, setUsers } = useContext(AppDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAppData(data);
        setTickets(data?.tickets);
        setUsers(data?.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div></div>}>
        <TaskBoard />
      </Suspense>
    </div>
  );
}

export default App;
