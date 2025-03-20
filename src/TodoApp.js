import { useState } from "react";
function TodoApp(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    // add task
    const addTask =() => {
        if(task.trim() != ""){
            setTasks([...tasks,task]);
            setTask("");
        }
    }
    //xoa task
    const removeTask= (index)=>{
        setTasks(tasks.filter((_,i)=>i != index));
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>To-Do List</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button onClick={addTask}>Thêm</button>
        
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t} <button onClick={() => removeTask(index)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>

    )
}
export default TodoApp;