import { createContext ,useContext } from "react";


export const createTodo =createContext ({

    todos:[
        
        {
            id:Date.now(),
            message:"",
            completed:false,


         }
  ],
    

    addTodo :(todo)=>{},
    updateTodo :(id,todo) => {},
    deleteTodo :(id) =>{},
    toggleTodo :(id) =>{},
})


export const useTodo = () =>{

    return useContext (createTodo)
}

export const TodoProvider = createTodo.Provider;
