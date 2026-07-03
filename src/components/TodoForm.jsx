import { useState } from "react"
import { useTodo } from "../context"

export function TodoForm ()
{

    const [todo,settodo]=useState("")
    const {addtodo}=useTodo()
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
    
                      
        <form onSubmit={add} className="Form bg-[#7CAFC4] justify-center items-center ">
            <input  className="text-4xl text-black "
            type="text"
            value={todo}
            placeholder="Add a new Todo"
            onChange={(e)=>settodo(e.target.value)}
            />
        </form>
    </>)
}