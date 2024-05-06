import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {

  return (
    <ul className='main'>
        {todos.map ((todo, todoIndex ) => {
            return (
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
// map - reaguje na vsetkz elementy v let a parent element musí mať unikatny key, naco rad pouziva index lebo kazdy element v poli je unikatny
