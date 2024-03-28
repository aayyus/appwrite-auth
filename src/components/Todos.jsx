import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

import { databases } from '../appwrite/appwriteconfig'


function Todos() {
  const[todos,setTodos] = useState()
  const[loader, setLoader] = useState(false)

  useEffect(()=>{
    const getTodos = databases.listDocuments("65bfbad73d77cdc55373","65bfbaf620e005bd2943")
console.log(getTodos);
    getTodos.then(
      function(response){
        setTodos(response.documents)
      },
      function(error){
        console.log(error);

      }
    )
    setLoader(false)
  },[])

  const deleteTodo = (id) =>{

    const promise= databases.deleteDocument("65bfbad73d77cdc55373","65bfbaf620e005bd2943", id)
    promise.then(
      function(response){
        console.log(response);
      },
      function(error){
        console.log(error);

      }
    )
    window.location.reload()
  }



  return (
    <div className="max-w-7xl mx-auto">
    <p className="text-xl font-bold mb-2">Todo List</p>
    {loader ? (
      <p>Loading ...</p>
    ) : (
      <div>
        
            {todos && 
            todos.map(item=>(
              <div key={item.$id} >
              <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                <div>
                  <p>{item.todo}</p>
                </div>
                <div>
                  <span
                    className="text-red-400 cursor-pointer"
                    onClick={()=>{
                      deleteTodo(item.$id)
                    }}
                  >
                    Delete Item
                  </span>
                </div>
              </div>
            </div>

    ))}
          
      </div>
    )}
  </div>  )
}

export default Todos