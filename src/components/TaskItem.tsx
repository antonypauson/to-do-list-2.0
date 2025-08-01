import type { Task } from "../App";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export default function TaskItem({ task, onDelete, onEdit }: TaskItemProps) {
  return (
    <li className="task-li flex items-center gap-4">
      <p className="flex-grow">{task.text}</p>
      <div className="icon-container flex flex-shrink-0 gap-4 p-0">
        <img
          className="w-[45px] hover:scale-120 transition cursor-pointer"
          src="/src/assets/edit-button.svg"
          onClick={() => onEdit(task.id)}
        />
        <img
          className="w-[45px] hover:scale-120 transition cursor-pointer"
          src="/src/assets/remove-button.svg"
          onClick={() => onDelete(task.id)}
        />
      </div>
    </li>
  );
}
