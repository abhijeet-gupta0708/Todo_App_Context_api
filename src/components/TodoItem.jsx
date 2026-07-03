import { useState } from "react"
import { useTodo } from "../context"



export function TodoItem({todo})
{
    const [istodoeditable,setistodoeditable]=useState(false)
    const [todomessage,settodomessage]=useState(todo.message)
    const [updatetodo,setupdatetodo]=useState(false)
    const[updateTodo,toggleTodo,deleteTodo]=useTodo();

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

            {/* Button Formation  */}
            {/* There will be two button 1 ckick save button and other of delete button */}
            {/* ADDButton  */}
            <button 
            className=" ADDBUTTON "
            onClick={ ()=>{
                if(todo.completed)
                return
                if(istodoeditable)
                    editodo();
                else
                    setistodoeditable((prev)=>(!prev))
            }
            }>ADD</button>
        </div>

            
        </>)
}