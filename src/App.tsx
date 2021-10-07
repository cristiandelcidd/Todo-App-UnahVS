import { FC, useContext } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodosList";
import TodosContext from "./context/todos/todosContext";

import TodoState from "./context/todos/TodoState";

const App: FC = () => {
  const { state: todos } = useContext(TodosContext);

  return (
    <TodoState>
      <div className='container'>
        <Form />
        {todos?.length === 0 ? <h2>No hay tareas pendientes</h2> : <TodoList />}
      </div>
    </TodoState>
  );
};

export default App;
