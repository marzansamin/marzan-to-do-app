import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";


function TodoForm() {
  const [todo, setTodo] = useState("") //eita individual todo er jonno
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()
    if(!todo) return
    addTodo({todo: todo, completed: false})
    setTodo("") //form er moddhe todo jeita likha chilo sheita ekhon remove hoye jabe button click er sathe sathe
  }
  
  return (
      <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo} //eikhane ja likha hobe ta todo te jabe
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#CEDEBD] text-[#435334] shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;