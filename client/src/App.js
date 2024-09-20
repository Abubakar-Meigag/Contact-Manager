import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([{}]);

  const fetchData = async () => {
    try {
      const res = await fetch("/contact");

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        setData(data);
        console.log(data);
      } else {
        throw new Error("Response is not valid JSON");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Contacts</h1>
      <h2>{JSON.stringify(data, null, 2)}</h2>
    </div>
  );
};

export default App;
