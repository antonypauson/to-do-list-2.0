function AddTask() {
  return (
    <div className="top-container mx-auto flex flex-col items-center">
      <div className="heading-container">
        <h1 className="text-5xl font-bold text-center tracking-tight my-6">to do list</h1>
      </div>
      <div className="input-container p-6 flex gap-5">
        <input className="bg-purple-50 px-8 md:w-2xl py-2 text-2xl rounded-2xl border-amber-300 outline-1 outline-amber-400 outline-offset-1 focus:outline-3 focus:-outline-offset-0" type="text" placeholder="your new task..."/>
        <button className="add-btn bg-amber-400 px-4 rounded-[10px] text-xl text-white">Add</button>
      </div>
    </div>
  )
}

function Tasks() {
  return (
    <ul className="bg-amber-200 flex-grow text-cyan-800 text-3xl leading-8.5 p-5 flex flex-col gap-5">
      <li className="task-li flex items-center gap-4">
        <p className="flex-grow">Complete this project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident, soluta excepturi dolorem ab suscipit! Aut suscipit consectetur iusto ad quasi unde consequatur voluptatibus deserunt. Dicta fugit ullam debitis delectus.</p>
        <div className="icon-container flex flex-shrink-0 gap-4 p-0">
          <img className="w-[45px]" src="/src/assets/edit-button.svg"/>
          <img className="w-[45px]" src="/src/assets/remove-button.svg"/>
        </div>
      </li>

      <li className="task-li flex items-center gap-4">
        <p className="flex-grow">Complete this project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident, soluta excepturi dolorem ab suscipit! Aut suscipit consectetur iusto ad quasi unde consequatur voluptatibus deserunt. Dicta fugit ullam debitis delectus.</p>
        <div className="icon-container flex flex-shrink-0 gap-4 p-0">
          <img className="w-[45px]" src="/src/assets/edit-button.svg"/>
          <img className="w-[45px]" src="/src/assets/remove-button.svg"/>
        </div>
      </li>

      <li className="task-li flex items-center gap-4">
        <p className="flex-grow">Complete this project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident, soluta excepturi dolorem ab suscipit! Aut suscipit consectetur iusto ad quasi unde consequatur voluptatibus deserunt. Dicta fugit ullam debitis delectus.</p>
        <div className="icon-container flex flex-shrink-0 gap-4 p-0">
          <img className="w-[45px]" src="/src/assets/edit-button.svg"/>
          <img className="w-[45px]" src="/src/assets/remove-button.svg"/>
        </div>
      </li>

      <li className="task-li flex items-center gap-4">
        <p className="flex-grow">Complete this project Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident, soluta excepturi dolorem ab suscipit! Aut suscipit consectetur iusto ad quasi unde consequatur voluptatibus deserunt. Dicta fugit ullam debitis delectus.</p>
        <div className="icon-container flex flex-shrink-0 gap-4 p-0">
          <img className="w-[45px]" src="/src/assets/edit-button.svg"/>
          <img className="w-[45px]" src="/src/assets/remove-button.svg"/>
        </div>
      </li>
    </ul>
  )
}

export default function ToDoApp() {
  return (
    <div className="min-h-screen font-mono bg-cyan-100 flex flex-col">
      <h1>To Do List App</h1>
      <AddTask/>
      <Tasks/>
    </div>
  )
}