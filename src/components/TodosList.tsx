import { FC, useContext } from "react";
import TodoItem from "./TodoItem";

import TodosContext from "../context/todos/todosContext";

const TodoList: FC = () => {
  const { state: todos } = useContext(TodosContext);

  return (
    <>
      <h3>Tareas pendientes</h3>
      <ul>
        {todos?.map((todoItem) => {
          return <TodoItem key={todoItem.id} {...todoItem} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
