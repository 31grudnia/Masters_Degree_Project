import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
        setCurrentDate(data.date);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The date is {currentDate} and the time is {currentTime}.
        </p>
        <br />
        <p>Nigga asd</p>
        <br />
      </header>
    </div>
  );
}

export default App;
