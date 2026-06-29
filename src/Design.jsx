import { useEffect, useState } from "react"
import {TodoProvider} from "./context"


export default function Design ()

{
    const [todo,settodos]=useState([])

    {/* Add Todo Function  */}
    const addTodo =(todo) => 
        {
            settodos((prev)=>[{id:Date.now(),...todo},...prev])
        }

    {/* Update Todo Function  */}
    const updateTodo =(id,todo) =>
        {
            settodos ((prev) => prev.map((prevtodo)=>(prevtodo.id===id ? todo:prevtodo)))
        }
    {/* Delete Todo Function  */}
    const deleteTodo =(id)=>
        {
            settodos((prev)=> prev.filter((todo)=>todo.id!==id))
        }
    {/* Toggle Todo Function */}
    const toggleTodo =(id,todo) =>
        {
            settodos((prev)=>
                prev.map((eachval)=>{
                    if(eachval.id==id)
                    {
                        eachval.completed=!(eachval.completed)
                    }
                    else
                    {
                        todo
                    }
                })
            
            )
        }



        {/* Using Local storage to store the List of todos so that List of the task do not disappear everytime gets refreshed  */}


        useEffect((todos)=>{
            const todo =JSON.parse(localStorage.getItem("todo"))

            if(todo && todo.length >0)
            {
                settodos(todo)
            }
        },[])

        useEffect((todo)=>{
            localStorage.setItem("todo",JSON.stringify(todo))
        },[todo])
    return (
         <TodoProvider value={{todo,addTodo,deleteTodo,toggleTodo,updateTodo}}>
                <div className="FullBody bg-[#5995ED] w-full h-screen">


                  {/* Heading text */}
                    <div className="heading">
                        <h1 className="text-6xl text-center bg-[#044389] P-4 
                    border-black border-2 rounded-2xl  "> TODO </h1>
                    </div>



                  




                </div>


    
         </TodoProvider>
           )
}