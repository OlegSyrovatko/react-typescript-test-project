import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../todoSlice";
import "./ToDoList.css";

interface TodoListProps {
    items: { id: string; text: string }[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const dispatch = useDispatch();
  
  return (
    <ul>
      {props.items.map((todo) => (
          <li key={todo.id}>
          <span>{todo.text}</span>  
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              {/* <button onClick={props.onDelete.bind(null, todo.id)}>Delete</button> */}
          </li>
      ))}
    </ul>
  );
};

export default TodoList;
