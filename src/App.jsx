import {useState} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() { 
  // keď máme dva elementy na rovnakej úrovni v rámci parent component a obidve potrebujú prístup k rovnakému item (napríklad rovnaký TodoList), 
  // musime ten item definovať v parent elemente: -- komunikacia v strukture medzi komponentami v Reacte je len smerom dole, to preto
  // teraz maju pristup k itemu aj todo input aj todolist (v returne su)
  

    const [todos, setTodos] = useState([
      'Go to gym',
      'Eat more fruits and vegetables',
      'Pick up kids from school'
    ])

    function handleAddTodos(newTodo) {
      const newTodoList = [...todos, newTodo]
      setTodos(newTodoList)
    }

  return (
    <>
      <TodoInput handleAddTodos = {handleAddTodos}/>
      <TodoList todos = {todos} />
    </>
  )
}

export default App
