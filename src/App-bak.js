import TaskList from "./TaskList";
import { useState } from "react";
import TaskInput from "./TaskInput";
import { useEffect } from "react";
import { jsxs } from "react/jsx-runtime";
import Button from "./Button";
import Card from "./Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  // const [tasks, setTasks] = useState([
  //   { text: "học", complete: false },
  //   { text: "ăn", complete: false },
  //   { text: "ngủ", complete: false }
  // ]);

  const [tasks, setTasks] = useState(() => {
    const savetasks = localStorage.getItem("tasks");
    return savetasks ? JSON.parse(savetasks) : [];
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  const [newTasks, setNewTasks] = useState("");
  console.log("app");
  // const addTask = () => {
  //   if (newTasks.trim() != "") {

  //     setTasks([...tasks, { text: newTasks, complete: false }]);
  //     setNewTasks("");
  //   }
  // }
  const addTask = (text) => {
    setTasks([...tasks, { text, complete: false }]);
  }
  const removeTasks = (index) => {
    // const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(tasks.filter((_, i) => i !== index));
  }
  const toogletasks = (index) => {
    const updateTasks = tasks.map((task, i) => i === index ? { ...task, complete: !task.complete } : task);
    setTasks(updateTasks);
  }
  useEffect(() => {
    console.log("test useEffect");
  })


  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", desc: "Mô tả card 1" },
    { id: 2, title: "Card 2", desc: "Mô tả card 2" },
    { id: 3, title: "Card 3", desc: "Mô tả card 3" }
  ]);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  }
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  // hàm thêm card mới
  const handleAddCard = () => {
    if (!newTitle.trim() || !newDesc.trim()) {
      console.log("🛑 Dữ liệu nhập vào bị rỗng, không thêm card.");
      return;
    };
    const newCard = {
      id: Date.now(),
      title: newTitle,
      desc: newDesc
    }
    console.log("✅ Thêm Card:", newCard); // Kiểm tra xem newCard có được tạo hay không
    setCards([...cards, newCard]); // cập nhật danh sách card
    setNewTitle(""); // reset input
    setNewDesc("");
  }
  // hàm edit card
  const hanldeEdit = (id, newTitle, newDesc) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, title: newTitle, desc: newDesc } : card
      )
    );
  };

  // hàm kéo thả
  const handleDragEnd = (result) => {
    console.log("Drag ended!", result);
    if (!result.destination) return; // Nếu không có điểm đến thì thoát luôn

    const updatedCards = Array.from(cards);
    const [movedCard] = updatedCards.splice(result.source.index, 1);
    updatedCards.splice(result.destination.index, 0, movedCard);

    setCards(updatedCards);
  };
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  return (
    // <>
    //   <h1>Danh sách công việc </h1>
    //   <ul>
    //     {
    //       tasks.map((task, index) => (
    //         <li key={index} style={{ color: task.complete ? "#ccc" : "red" }}>{task.text}<button onClick={() => toogletasks(index)}>✔</button><button onClick={() => removeTasks(index)}>❌</button></li>
    //       )

    //       )}
    //   </ul >
    //   <input type="text" placeholder="Nhập công việc mới" value={newTasks} onChange={(e) => setNewTasks(e.target.value)}></input>
    //   <button onClick={addTask}>Thêm</button>

    // </>
    <>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </nav>

      <h1>Danh sách công việc </h1>
      <TaskInput addTask={addTask}></TaskInput>
      <TaskList tasks={tasks} toogletasks={toogletasks} removeTasks={removeTasks}></TaskList>
      {/* <input type="text" placeholder="Nhập công việc mới" value={newTasks} onChange={(e) => setNewTasks(e.target.value)}></input>
      <button onClick={addTask}>Thêm</button> */}

      <div className="flex flex-col items-center gap-6 bg-gray-100">
        {/*form thêm card */}
        <div className="flex gap-2">
          <input type="text" placeholder="Nhập tiêu đề" className="border px-3 py-2 rounded" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
          <input type="text" placeholder="Nhập mô tả" className="border px-3 py-2 rounded" value={newDesc} onChange={(e) => setNewDesc(e.target.value)}></input>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green -700" onClick={handleAddCard}> thêm card</button>
        </div>
      </div>
      {/* <div className="flex justify-center item-center h-screen bg-gray-100">
        {
          cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} desc={card.desc} onDelete={handleDelete}
              onEdit={hanldeEdit}
            ></Card>
          ))
        }
      </div> */}

      {/* vùng kéo thả */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cardsList" isDropDisabled={false} isCombineEnabled={false}
          ignoreContainerClipping={false}
        >
          {(provided) => (
            <div
              className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {console.log("Droppable rendered!")}
              {

                cards.map((card, index) => (

                  <Draggable Draggable key={card.id} draggableId={card.id.toString()} index={index} >
                    {(provided) => (
                      <div
                        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        className="bg-white p-4 rounded-lg shadow"
                      >
                        <Card
                          id={card.id}
                          title={card.title}
                          desc={card.desc}
                          onDelete={() =>
                            setCards(cards.filter((c) => c.id !== card.id))
                          }
                          onEdit={(id, newTitle, newDesc) =>
                            setCards((prevCards) =>
                              prevCards.map((c) =>
                                c.id === id ? { ...c, title: newTitle, desc: newDesc } : c
                              )
                            )
                          }
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext >





    </ >
  );

  useEffect(() => {
    console.log("test useEffect");
  })


}

export default App;
