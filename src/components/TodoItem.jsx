import { useState } from "react"
import { useTodo } from "../context"
import Design from "../Design"



export function TodoItem({todo})
{
    const [istodoeditable,setistodoeditable]=useState(false)
    const [todomessage,settodomessage]=useState(todo.message)
    const [updatetodo,setupdatetodo]=useState(false)
    const {updateTodo,toggleTodo,deleteTodo}=useTodo()

    const editodo =()=>{

        updateTodo(todo.id,{...todo,message:todomessage})
        setistodoeditable(false)

    }

    const togglecomplete =() => {
        toggleTodo(todo.id)
    }
   
   
   
   return (
        <>

        {/* Making Two Input box one checklist box and another one will be Input box */}
        <div className="inputformBox">

            {/* CheckBox */}
            <input 
            type="checkbox"
            checked={todo.completed}
            onChange={togglecomplete}
            />

            {/* InputBox */}
            <input 
            type="text"
            value={todomessage}
            placeholder="Enter Task"
            onChange={(e)=>settodomessage(e.target.value)}
            readOnly={!istodoeditable}
            />

           {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (istodoeditable) {
                      editodo();
                  } else setistodoeditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {istodoeditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
        </div>

            
        </>)
}