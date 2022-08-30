import React from "react";

const TaskInfo = (props) => {
  return (
    <div className="task">
      <input type="radio" className="checkTask" />
      <div className="taskName">{props.taskName}</div>
    </div>
  );
};

export default TaskInfo;
