'use client'

import {useState} from "react"
import { text } from "stream/consumers";

interface Todo {
    id: number;
    text:string;
    completed : boolean;

}
const Todolist = () => 
{
    const [todos, setTodos ] = useState <Todo[]>([ ]);
    const [inputValue, setInputValue] = useState ("");
//add of items

const addTodo = () => {
    if (inputValue.trim()=== "") return;
 setTodos([

         ...todos,
         {id: Date.now (), text: inputValue, completed:false},

                      

 ]);
setInputValue("");
};
// add values id:
     const toggleTodo= (id: number) => {
        setTodos (
            todos.map((todo)=>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            
            
            
            
            
            
            )
        );
     };
     //delete tode selection 
     const deleteTodo =(id:number) =>{
        setTodos (todos.filter((todo) => todo.id !== id ));




     }; return(
        <div className="flex flex-col min-h-screen">
        <header className="bg-blue-700 text-white py-4">
        <div className="max-width-4xl mx-aut text-cen">
            <h1 className="text-3xl font-serif">Todo list </h1>
             <p className="font-serif mt-3" >
                {""}
                Organize you work with our Next JS Todo List App </p>
                
        </div>
            
            
            
            
            
            
            </header>   
            <main className="flex-grow flex items-center justifycenter">
                <div className="max-w-ad mx-auto p-4 bg-slate-300 rounded-lg shadow-ad">
                    <div className="mb-4">
                        <div className="flex">
                            <input
                             type="text"
                             value ={inputValue}
                             onChange={(e)=>setInputValue(e.target.value)}
                             className="flex-grow p-2 border border-grey-400 rounded-lg"
                             placeholder="Add a new task...."
                             />
                             <button
                             onClick={addTodo}
                             className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hovor:bg-blue-600">
                            Add

                             </button>

                        </div>
                    </div>
                    <ul className="space-y-2">
 {todos.map((todo) => (
    <li key={todo.id}
    className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${
        todo.completed ? "bg-lime-400 line-through" : "bg-sky-300"
    }`} 
    >
        <span>{todo.text} </span>
    <div>
        <button 
        onClick={()=> toggleTodo(todo.id)}
        className="px-2 py-1 text-sn bg-orange-500 rounded-lg hover:bg-grey-300">
            {todo.completed ? "Undo" : "Completed"}

        </button>
        <button 
        onClick={()=> deleteTodo(todo.id)}
        className="px-2 py-1 text-sn bg-red-500 rounded-lg hover:bg-red-300"> 
           Delete

        </button>
        

        








    </div>
    </li>
 )
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 )}                       

                    </ul>
                </div>

            
            </main>
        
            
            
            
            
             </div>
     );


}
 
export default Todolist
