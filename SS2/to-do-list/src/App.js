import React from "react";
import "./App.css";
import TaskInfo from "./TaskInfo";

const App = () => {
  const taskData = [
    {
      task: "Clean up bedroom",
    },

    {
      task: "Buy some milk",
    },

    {
      task: "Jogging",
    },

    {
      task: "Learn React",
    },

    {
      task: "Doing Exercises",
    },
  ];

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter your task here"
        className="addTask"
      />

      {taskData.map((value, index) => {
        return <TaskInfo taskName={value.task} key={index} />;
      })}
      
      <div className="footer">
        <p>{taskData.length} tasks left!</p>
        <p>MindX todolist</p>
      </div>
    </div>
  );
};

export default App;
