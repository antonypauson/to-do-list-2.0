import { useState } from "react";
import filteringTask from "./utils/filteringTask";
import PageLayout from "./components/PageLayout";
import ToDoTitle from "./components/ToDoTitle";
import ToDoItems from "./components/ToDoItems";
import SearchInput from "./components/SearchInput";
import DeleteButton from "./components/DeleteButton";
import type { Task } from "./types";

export default function ToDoApp() {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 0,
      name: "First Task",
      done: true,
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
  const filteredTasks = filteringTask(tasks, query);

  function handleAdd(taskName: string) {
    const newTask = {
      id: tasks.length,
      name: taskName,
      done: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  function handleDeleteAll() {
    const newTask:Task[] = [];
    setTasks(newTask);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    console.log(query);
  }

  function handleOnChange(newTask: Task) {
    const newTasks = tasks.map(task => {
      if (task.id === newTask.id) {
        return newTask; 
      } else {
        return task; 
      }
    })
    setTasks(newTasks); 
  }

  function handleOnDelete(taskId: number) {
    const newTasks = tasks.filter(task => task.id !== taskId); 
    setTasks(newTasks); 
  }

  return (
    <PageLayout>
      <ToDoTitle />
      <SearchInput
        onAdd={handleAdd}
        onChange={handleSearchChange}
        query={query}
        empty={emptyTaskList}
      />
      <ToDoItems tasks={filteredTasks} empty={emptyTaskList} onChange={handleOnChange} onDelete={handleOnDelete}/>
      <DeleteButton onDeleteAll={handleDeleteAll} empty={emptyTaskList} />
    </PageLayout>
  );
}
