import React, { useRef } from "react";
import "./AddTodos.css";

interface OnAdd {
    onAdd: (todotext: string) => void;
 }

const AddTodos: React.FC<OnAdd> = props => {
    const myInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      const enteredText = myInput.current!.value;
      props.onAdd(enteredText);
    };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text-todo">Text for todo: </label>
          <input type="text" id="text-todo" ref={myInput} /> 
      <input className="submit-button" type="submit" value="Add Todo" />
    </form>
  );
};

export default AddTodos;
