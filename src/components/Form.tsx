import { useContext } from "react";
import TodosContext from "../context/todos/todosContext";

const Form = () => {
  const { setItem, item, addItem } = useContext(TodosContext);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='todo-item'>Agregar tarea</label>
      <input
        type='text'
        id='todo-item'
        placeholder='Ej. Tareas universidad'
        autoComplete='off'
        name='item'
        value={item}
        onChange={(e) => setItem?.(e.target.value)}
      />
      <input type='submit' value='Agregar' onClick={addItem} />
    </form>
  );
};
export default Form;
