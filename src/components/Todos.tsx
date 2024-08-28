import React, { FC } from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

type TodosProps={
    todoArray:Todo[]
}

const Todos:FC<TodosProps> = ({todoArray}) => {
  return (
    <ul>
        {
            todoArray.map((item)=>{
                return <TodoItem item={item} key={item.id}/>
            })
        }
    </ul>
  )
}

export default Todos