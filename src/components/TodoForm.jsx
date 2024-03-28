import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { databases } from '../appwrite/appwriteconfig'


function TodoForm() {
  const [todo, setTodo ] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const promise = databases.createDocument(
      "65bfbad73d77cdc55373",
      "65bfbaf620e005bd2943",
      uuidv4(),
      {
        todo,
      },
      undefined
    );
   
    console.log(promise);
    promise.then(
    function(response){
      console.log(response);
    },
    function(error){
      console.log(error);
    }
    )
    e.target.reset();
    window.location.reload()

  }
  return (
    <div className="max-w-7xl mx-auto mt-10">
    <form
      action=""
      onSubmit={handleSubmit}

      className="flex justify-center mb-10"
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Todo"
        className="border p-2 w-2/3 rounded-md"
        onChange={(e)=>{
          setTodo(e.target.value)
        }}
        
      />
      <button
        className="bg-purple-500 p-2 text-white ml-2 rounded-md"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  </div>  )
}

export default TodoForm