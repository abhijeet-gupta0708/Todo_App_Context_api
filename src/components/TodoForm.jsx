import { useState } from "react"
import { useTodo } from "../context"

export function TodoForm ()
{

    const [todo,settodo]=useState("")
    const {addTodo}=useTodo()
    const add =(e) =>{
        e.preventDefault()
        if(!todo) return
       
       addTodo({
    message: todo,
    completed: false
});
        settodo("")
    }
    return (<>
    {/*  Making Todo Form   & Button */}
    
                      
        <form onSubmit={add} className="Form bg-[#7CAFC4] w-full flex flex-col md:flex-row justify-center items-center  ">
            <input  className="text-4xl text-black w-full block "
            type="text"
            value={todo}
            placeholder="Add a new Todo"
            onChange={(e)=>settodo(e.target.value)}
            />
            <button type="submit" className="bg-[#FCFF4B] w-full md:w-fit
             rounded-r-lg text-2xl text-black shrink-0 hover:cursor-cell">Add Task</button>
        </form>
    </>)
}