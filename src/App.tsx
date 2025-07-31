function AddTask() {
  return (
    <div className="top-container mx-auto flex flex-col items-center">
      <div className="heading-container">
        <h1 className="text-5xl font-bold text-center tracking-tight my-6">to do list</h1>
      </div>
      <div className="input-container p-6 flex gap-5">
        <input className="bg-purple-50 px-8 py-2 text-2xl rounded-2xl border-amber-300 outline-1 outline-amber-400 outline-offset-1 focus:outline-3 focus:-outline-offset-0" type="text" placeholder="your new task..."/>
        <button className="add-btn bg-amber-400 px-4 rounded-[10px] text-xl text-white">Add</button>
      </div>
    </div>
  )
}

function Tasks() {
  return (
    <ul className="bg-cyan-300">
      <li>
        <p>Complete this project</p>
        <div className="icon-container">

        </div>
      </li>

      <li>
        <p>Complete this project</p>
        <div className="icon-container">
          
        </div>
      </li>

      <li>
        <p>Complete this project</p>
        <div className="icon-container">
          
        </div>
      </li>
    </ul>
  )
}

export default function ToDoApp() {
  return (
    <div className="h-full font-mono bg-cyan-100">
      <h1>To Do List App</h1>
      <AddTask/>
      <Tasks/>
    </div>
  )
}