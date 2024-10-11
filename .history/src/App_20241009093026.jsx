import { useState } from 'react';
import Form from './Form'
import ToDoCounter from "./Counter.jsx"


function App() {
const [data, handle] = useState('')
  return (
    <>
      <ToDoCounter setData={setData} />
      <Form data={data}  />
    </>
  );
}

export default App