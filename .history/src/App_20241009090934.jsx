import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
const [data, setData] = useState()
  return (
    <>
      <ToDoCounter />
      <Form />
    </>
  );
}

export default App