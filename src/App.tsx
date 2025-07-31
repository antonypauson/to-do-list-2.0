import TaskItem from "./components/TaskItem"; 
import { useState } from "react"; 

function AddTask({newTaskInput, onNewTaskInput, handleClick}) {

  const handleEnterKey = (event) => {
    if (event.key == "Enter") {
      handleClick(); 
    }
  }
  
  return (
    <div className="top-container mx-auto flex flex-col items-center">
      <div className="heading-container">
        <h1 className="text-5xl font-bold text-center tracking-tight my-6">to do list</h1>
      </div>
      <div className="input-container p-6 flex gap-5">
        <input className="bg-purple-50 px-8 md:w-2xl py-1 md:py-2 text-2xl rounded-2xl border-amber-300 outline-1 outline-amber-400 outline-offset-1 focus:outline-3 focus:-outline-offset-0" type="text" placeholder="your new task..."  value={newTaskInput} onChange={(event) => onNewTaskInput(event.target.value)} onKeyDown={handleEnterKey}/>
        <button className="add-btn bg-amber-400 px-4 rounded-[10px] text-xl text-white hover:bg-cyan-500 hover:text-amber-400 cursor-pointer" onClick={handleClick}  >Add</button>
      </div>
    </div>
  )
}

function Tasks({tasks}) {
  return (
    <ul className="bg-amber-300 flex-grow text-cyan-800 text-2xl leading-8.5 p-5 md:p-20 flex flex-col gap-5 font-semibold">

     {tasks.map(eachTask => 
      <TaskItem task={eachTask} key={eachTask.id}/>
     )}
    </ul>
  )
}

export default function ToDoApp() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Learn React"}, 
    {id: 2, text: "Master Tailwind CSS"}, 
    {id: 3, text: "Become a full stack developer"},
    {id: 4, text: "Read a book"}
  ])

  const [newTaskInput, setNewTaskInput] = useState(""); 

  function handleClick() {
    if (newTaskInput.trim() == "") {
      return; 
    }

    const newTask = {id: tasks.length + 1, text: newTaskInput}; 

    setTasks([...tasks, newTask]); 

    setNewTaskInput("");
  }

  return (
    <div className="min-h-screen font-mono bg-cyan-100 flex flex-col">
      <h1>To Do List App</h1>
      <AddTask newTaskInput={newTaskInput} onNewTaskInput={setNewTaskInput} handleClick={handleClick}/>
      <Tasks tasks={tasks}/>
    </div>
  )
}