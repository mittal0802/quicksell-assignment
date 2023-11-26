import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar.component";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
