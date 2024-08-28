import React, { FC } from 'react'
import { Todo } from '../types';




type TodoItemProps = {
    item : Todo;
};

const TodoItem:FC<TodoItemProps> = ({item}) => {
  return (
    <li key={item.id}>
        {item.title}
    </li>
  )
}

export default TodoItem