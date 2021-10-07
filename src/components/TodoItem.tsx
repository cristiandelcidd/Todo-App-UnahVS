import { FC, useContext } from "react";
import TodosContext from "../context/todos/todosContext";

const TodoItem: FC<TodoItem> = ({ id, value }) => {
  const { deleteItem } = useContext(TodosContext);

  return (
    <li className='todo-item'>
      <p>{value}</p>
      <button className='btn btn-danger' onClick={() => deleteItem?.(id)}>
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
