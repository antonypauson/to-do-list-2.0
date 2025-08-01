import TaskItem from "./components/TaskItem";
import { useEffect, useState } from "react";

export interface Task {
  id: number;
  text: string;
}

function AddTask({
  newTaskInput,
  onNewTaskInput,
  handleClick,
}: {
  newTaskInput: string;
  onNewTaskInput: (value: string) => void;
  handleClick: () => void;
}) {
  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key == "Enter") {
      handleClick();
    }
  };

  return (
    <div className="top-container mx-auto flex flex-col items-center">
      <div className="heading-container">
        <h1 className="text-5xl font-bold text-center tracking-tight my-6">
          to do list
        </h1>
      </div>
      <div className="input-container p-6 flex gap-5">
        <input
          className="bg-purple-50 px-8 md:w-2xl py-1 md:py-2 text-2xl rounded-2xl border-amber-300 outline-1 outline-amber-400 outline-offset-1 focus:outline-3 focus:-outline-offset-0"
          type="text"
          placeholder="your new task..."
          value={newTaskInput}
          onChange={(event) => onNewTaskInput(event.target.value)}
          onKeyDown={handleEnterKey}
        />
        <button
          className="add-btn bg-amber-400 px-4 rounded-[10px] text-xl text-white hover:bg-cyan-500 hover:text-amber-400 cursor-pointer"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function Tasks({
  tasks,
  onDelete,
  onEdit,
}: {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) {
  return (
    <ul className="bg-amber-300 flex-grow text-cyan-800 text-2xl leading-8.5 p-5 md:p-20 flex flex-col gap-5 font-semibold">
      {tasks.map((eachTask) => (
        <TaskItem
          task={eachTask}
          key={eachTask.id}
          onDelete={() => onDelete(eachTask.id)}
          onEdit={() => onEdit(eachTask.id)}
        />
      ))}
    </ul>
  );
}

export default function ToDoApp() {
  /*

  - localStorage.setItem("key", "value"); 
  - localStorage.getItem("key"); 

  - 'useState()' is used to initialize tasks array from 'localStorage'
  - so everytime you reload, it tries to get "tasks" stored in localStorage
  - if no "tasks" stored in localStorage -> empty array intialization as "tasks"
  - everything inside localStorage is stored as JSON string, so we need parse for converting it back to js Object, thus JSON.parse()

  - 'useEffect(() => {
     what to do when change occurs
    }, [changing element])'
  - whenever 'tasks' array of objects changes -> we set localStorage
  - localStorage only have string/JSON format -> JSON.stringfiy()

  */
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks"); 
    return savedTasks ? JSON.parse(savedTasks) : []; 
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]); 

  const [newTaskInput, setNewTaskInput] = useState("");

  const [editFlag, setEditFlag] = useState<number | null>(null);

  function handleClick() {
    if (editFlag) {
      console.log("HI");
      setTasks(
        tasks.map((task:Task) =>
          task.id === editFlag ? { ...task, text: newTaskInput } : task
        )
      );
      setEditFlag(null);
      setNewTaskInput("");
    } else {
      if (newTaskInput.trim() == "") {
        return;
      }

      const newTask = { id: tasks.length + 1, text: newTaskInput };
      setTasks([...tasks, newTask]);
      setNewTaskInput("");
    }
  }

  function handleDelete(id: number) {
    setTasks(tasks.filter((task: Task) => task.id != id));
  }

  function handleEdit(id: number) {
    console.log("let us edit ", id);
    const taskToEdit = tasks.find((task: Task) => task.id == id);
    if (taskToEdit) {
      console.log(taskToEdit);
      setEditFlag(id);
      setNewTaskInput(taskToEdit.text);
    }
  }

  return (
    <div className="min-h-screen font-mono bg-cyan-100 flex flex-col">
      <h1>To Do List App</h1>
      <AddTask
        newTaskInput={newTaskInput}
        onNewTaskInput={setNewTaskInput}
        handleClick={handleClick}
      />
      <Tasks tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}
