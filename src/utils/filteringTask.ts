export default function filteringTask(tasks, query) {
    return tasks.filter(task => task.name.split(" ").some(eachWord => eachWord.toLowerCase().startsWith(query.toLowerCase())))
}







  