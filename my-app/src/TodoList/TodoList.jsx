import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";
import TodoAction from "./TodoAction";
import todos from "../data/fixtures";

export default function TodoList() {
  return (
    <>
    <SearchBar />
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
    <TodoAction />
    </>
    
  );
}
