import { useState } from "react"
import { useTodo } from "../context"

export function TodoForm ()
{

    const [todo,settodo]=useState("")
    const {addtodo}=useTodo
    return (<>
    {/*  Making Todo Form   & Button */}
    
                      
        <div className="Form bg-[#7CAFC4] justify-center items-center ">
            <input  className="text-4xl text-black "
            type="text"
            value={""}
            placeholder="Add a new Todo"
            />
        </div>
    </>)
}