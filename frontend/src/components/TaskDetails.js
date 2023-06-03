import React, { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TaskDetails = ({ task }) => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useTasksContext()

  const handleClick = async () => {
    try {
      const response = await fetch(`/api/tasks/${task._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const json = await response.json();
        dispatch({ type: "DELETE_TASK", payload: json });
      } else {
        console.error("Error deleting task:", response.status);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  }

  const handleUpdate = async (newStatus) => {
    try {
      const response = await fetch(`/api/tasks/${task._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
  
      if (response.ok) {
        const updatedTask = { ...task, status: newStatus }; // Create the updated task object with the new status
        dispatch({ type: "UPDATE_TASK", payload: updatedTask }); // Update the task in the context state
        console.log("Status updated successfully:", updatedTask);
        setOpen(false); // Close the dropdown after successful update
      } else {
        console.error("Error updating status:", response.status);
        // Handle the error and display an error message to the user
      }
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle the error and display an error message to the user
    }
  };
  
  

  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>
        <strong>description: </strong>
        {task.description}
      </p>
      <p>
        <strong>time remaining: </strong>
        {task.time}
      </p>
      <p>
        <strong>status: </strong>
        {task.status}
      </p>
      <p>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
      <button className="update" onClick={handleOpen}>
        Update
      </button>
      {open && (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={() => handleUpdate("Terminated")}>Terminated</button>
          </li>
          <li className="menu-item">
            <button onClick={() => handleUpdate("Completed")}>Completed</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TaskDetails;
