export default function filteringTask(tasks, query) {
    const filteredQuery = query.toLowerCase().trim(); 

    return tasks.filter(task => task.name.toLowerCase().includes(filteredQuery)); 
}







  