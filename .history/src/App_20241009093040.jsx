import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
const [data, handleTodoCount] = useState('')
  return (
    <>
      <ToDoCounter setData={const [data, handleTodoCount] = useState('')
} />
      <Form data={data}  />
    </>
  );
}

export default App
