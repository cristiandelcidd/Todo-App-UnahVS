const todosReducer = (state: TodoItem[], action: TodosAction): TodoItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "DELETE_ITEM":
      return state.filter(({ id }) => id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;
