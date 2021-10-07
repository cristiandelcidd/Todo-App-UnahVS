interface TodoItem {
  id: string;
  value?: string;
}

interface TodosAction {
  type: "ADD_ITEM" | "DELETE_ITEM";
  payload: TodoItem;
}

interface ContextValues {
  state: TodoItem[];
  deleteItem: (id: string) => void;
  addItem: () => void;
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}
