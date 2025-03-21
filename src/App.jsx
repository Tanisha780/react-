import React, { useState } from 'react'

const App = () => {
  const [todo,setTodo]=useState([]); // in memory database
  const[task,setTask]=useState('');
  function handleTask(){
    if(task=="")return;
    setTodo([...todo,{name:task,id:crypto.randomUUID()}]);
    setTask("")
  }
  console.log(todo);
  function handleDelete(index){
    const newTodos = todo.filter((t,idx)=>idx!=index);
    setTodo(newTodos);
  }
  
  return (
    <div className='bg-gray-500  ml-9 mr-9 text-white font-bold min-h-screen  flex flex-col justify-center items-center p-5 '>
      <h1 className='mb-4 gap-2'> Todo List</h1>
      <div className=' flex mb-4 gap-2'>
      <input placeholder='type your task' className='border rounded-2xl p-2 '
      onChange={(e)=>setTask(e.target.value)}
      value={task} />
      <button onClick={handleTask} className='bg-pink-400 p-2 rounded-2xl'>Add task</button>
    </div>
    <ul className='w-72 list-disc'>{todo.map((t,index)=>(
      <li key={t.id} className='flex justify-between items-center'>{t.name}
      <button className=' text-red-500' onClick={()=>handleDelete(index)}>X</button></li>
    ))}</ul>
    </div>
  )
}

export default App
