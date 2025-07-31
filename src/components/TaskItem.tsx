export default function TaskItem({task}) {
    return (
        <li className="task-li flex items-center gap-4">
            <p className="flex-grow">{task.text}</p>
            <div className="icon-container flex flex-shrink-0 gap-4 p-0">
                <img className="w-[45px] hover:scale-120 transition cursor-pointer" src="/src/assets/edit-button.svg"/>
                <img className="w-[45px] hover:scale-120 transition cursor-pointer" src="/src/assets/remove-button.svg"/>
            </div>
        </li>
    )
}