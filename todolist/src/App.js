import React from "react";

import List from "./List";

function App() {
  const tasks = [
    { id: 1, title: "아무일도 하기싫다" },
    { id: 2, title: "건물 매입" },
  ];
  return (
    <div className="App">
      <div>
        <h1>To-do</h1>
        <List tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
