// import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";

const App = () => {
  // const fetchData = async () => {
  //   try {
  //     const res = await fetch("/contact");

  //     if (!res.ok) {
  //       throw new Error(`HTTP error! Status: ${res.status}`);
  //     }

  //     const contentType = res.headers.get("content-type");
  //     if (contentType && contentType.includes("application/json")) {
  //       const data = await res.json();
  //       console.log(data);
  //     } else {
  //       throw new Error("Response is not valid JSON");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);



  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
