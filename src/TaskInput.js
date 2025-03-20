import { useState } from "react";
function TaskInput({ addTask }) {
    const [newTasks, setNewTasks] = useState("");
    const handleSubmit = () => {
        if (newTasks.trim() != "") {
            addTask(newTasks);
            setNewTasks("");
        }
    }
    return (
        <>
            <input type="text" placeholder="Nhập công việc mới" value={newTasks} onChange={(e) => setNewTasks(e.target.value)}></input>
            <button onClick={handleSubmit}>Thêm</button>
        </>
    )
}
export default TaskInput