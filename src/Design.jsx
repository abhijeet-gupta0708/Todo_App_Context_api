import { useEffect, useState } from "react"
import {TodoProvider} from "./context"
import { TodoForm } from "./components/TodoForm"
import { TodoItem } from "./components/TodoItem"


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
   

        const toggleTodo = (id) => {
    settodos((prev) =>
        prev.map((item) =>
            item.id === id
                ? { ...item, completed:!(item.completed) }
                : item
        )
    );
};



        {/* Using Local storage to store the List of todos so that List of the task do not disappear everytime gets refreshed  */}


            useEffect(() => {
            const raw=localStorage.getItem("todo")

            if(!raw) return

            try
            {
            const data = JSON.parse(raw)
            if(Array.isArray(data))
            {
                settodos(data)
            }
            }

           catch (e)
           {
            console.log("Invalid JSON in LocalStorage",e)
           }
            
        }, [])

            useEffect(()=>{
                const new_data=JSON.stringify(todo)
                localStorage.setItem("todo",new_data)
            },[todo])




        
    return (
         <TodoProvider value={{todos:todo,addTodo,deleteTodo,toggleTodo,updateTodo}}>
                <div className="FullBody bg-[#5995ED] flex flex-col w-full h-screen">


                  {/* Heading text */}
                    <div className="heading">
                        <h1 className="text-6xl text-center bg-[#044389] P-4 
                    border-black border-2 rounded-2xl m-2"> TODO </h1>
                    </div>

                  <div className="buttonandform flex flex-col w-full h-fit gap-4">
                    
                  {/* Here goes the Form Part  */}
                  <TodoForm />

                  {/* Button Goes here  */}

                  <div className="button flex flex-col w-full bg-[#ca962f] ">
                  {todo.map((todo)=>(
                    <div key={todo.id}>
                        <TodoItem todo={todo} />
                    </div>
                  ))}
                     
                    
                  </div>


                  </div>

                  




                </div>


    
         </TodoProvider>
           )
}