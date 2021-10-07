import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import TodosContext from "./todosContext";
import todosReducer from "./todosReducer";

const TodoState: FC<{ children: ReactNode }> = ({ children }) => {
  const todoList: TodoItem[] = JSON.parse(localStorage.getItem("todos")!) || [];

  const [item, setItem] = useState<string>("");

  const [state, dispatch] = useReducer(todosReducer, todoList);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addItem = () => {
    if (item.trim().length === 0) return;

    const todoItem: TodoItem = {
      id: Math.random().toString(),
      value: item,
    };

    dispatch({
      type: "ADD_ITEM",
      payload: todoItem,
    });

    setItem("");
  };

  const deleteItem = (id: string) => {
    dispatch({ type: "DELETE_ITEM", payload: { id } });
  };

  return (
    <TodosContext.Provider
      value={{ state, deleteItem, addItem, item, setItem }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodoState;
