import { createContext } from "react";

const TodosContext = createContext<Partial<ContextValues>>({});

export default TodosContext;
