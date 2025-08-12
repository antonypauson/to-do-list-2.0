import type { Task } from "../types";

export default function filteringTask(tasks: Task[], query: string) {
    const filteredQuery = query.toLowerCase().trim(); 

    return tasks.filter(task => task.name.toLowerCase().includes(filteredQuery)); 
}







  