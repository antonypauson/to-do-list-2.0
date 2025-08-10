import { useEffect, useState } from "react";
import filteringTask from "./utils/filteringTask";
import PageLayout from "./components/PageLayout";
import ToDoTitle from "./components/ToDoTitle";
import ToDoItems from "./components/ToDoItems";
import SearchInput from "./components/SearchInput";
import DeleteButton from "./components/DeleteButton";

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

  const emptyTaskList = tasks.length === 0; 

  function handleAdd(taskName) {
    const newTask = {
      id: tasks.length, 
      name: taskName, 
      done: false, 
    }
    setTasks([...tasks, newTask]); 
    console.log(tasks);
  }

  function handleDeleteAll() {
    const newTask = []; 
    setTasks(newTask); 
  }

  return (
    <PageLayout>
      <ToDoTitle />
      <SearchInput onAdd={handleAdd} />
      <ToDoItems tasks={tasks} empty={emptyTaskList} />
      <DeleteButton onDeleteAll={handleDeleteAll} empty={emptyTaskList} />
    </PageLayout>
  );
}
