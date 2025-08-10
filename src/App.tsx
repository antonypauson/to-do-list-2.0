import { useEffect, useState } from "react";

import PageLayout from "./components/PageLayout";
import ToDoTitle from "./components/ToDoTitle";
import FooterButtons from "./components/DeleteButton";
import ToDoItems from "./components/ToDoItems";
import SearchInput from "./components/SearchInput";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: "First Task",
      done: false,
    },
    {
      id: 1,
      name: "Second Task",
      done: false,
    },
    {
      id: 2,
      name: "Third Task",
      done: false,
    },
  ]);
  
  function handleAdd(taskName) {
    const newTask = {
      id: tasks.length, 
      name: taskName, 
      done: false, 
    }
    setTasks([...tasks, newTask]); 
    console.log(tasks);
    
  }

  return (
    <PageLayout>
      <ToDoTitle />
      <SearchInput onAdd={handleAdd}/>
      <ToDoItems tasks={tasks}/>
      <FooterButtons />
    </PageLayout>
  );
}
