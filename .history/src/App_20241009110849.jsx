import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
  const [countTodo, setCount] = useState('')


    function increase() {


    }
  return (
    <>
      <ToDoCounter onTodoCount={countTodo} />
      <Form handleTodoCount={handleTodoCount} />
    </>
  );
}

export default App