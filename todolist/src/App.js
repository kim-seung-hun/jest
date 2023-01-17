import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import tasks from "../fixtures/tasks";

import { setTasks } from "./actions";

import ListContainer from "./ListContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div className="App">
      <div>
        <h1>To-do</h1>
        <ListContainer />
      </div>
    </div>
  );
}

export default App;
