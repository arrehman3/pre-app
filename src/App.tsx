
import { useEffect, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import { getTodos } from './api/todos/todos-api'
import { Todo } from './types'





function App() {
  const [todos,setTodos]=useState<Todo[]>([]);
  useEffect(()=>{
    getTodos().then((todo)=>{
      setTodos(todo);
    })
  },[])

  return (
    <> 
      
      
      <Todos todoArray={todos}/>
      
    </>
  )
}

export default App
