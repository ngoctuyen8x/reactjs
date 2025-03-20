function TaskList({tasks, toogletasks, removeTasks}) {
    return (
        <ul>
            {
                tasks.map((task, index) => (
                    <li key={index} style={{ color: task.complete ? "#ccc" : "red" }}>{task.text}<button onClick={() => toogletasks(index)}>✔</button><button onClick={() => removeTasks(index)}>❌</button></li>
                ))}
        </ul>
    )
}
export default TaskList


// function TaskList({ tasks, toggleTask, removeTask }) {
//     return (
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
//             {task.text}
//             <button onClick={() => toggleTask(index)}>✔</button>
//             <button onClick={() => removeTask(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     );
//   }
  
//   export default TaskList;