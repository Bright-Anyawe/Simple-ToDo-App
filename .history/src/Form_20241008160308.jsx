import { useState } from "react";

export default function Form() {

const [todoList, setTodoList] = useState({
  toDos: [],
  inputValue: ""
});


 }

  handleInputChange(e) {

   setState((prevState) => ({
      ...todoList,
      inputValue: e.target.value,
    }));
  }

  handleSubmit(e) {
   

  }



}