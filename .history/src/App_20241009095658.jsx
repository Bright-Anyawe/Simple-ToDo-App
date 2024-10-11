import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [countTodo, setCount] = useState({
       count: '',
  })


    function handleTodoCount() {

    setCount((prevState) => ({
      ...prevState,
      count: todos.length,
    }));

  return (
    <>
      <ToDoCounter handleTodoCount={handleTodoCount} />
      <Form toDoCounter={toDoCounter} />
    </>
  );
}

export default App