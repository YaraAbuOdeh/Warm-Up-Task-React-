export default function TodoItem({ todo }) {
  return (
    <li
      key={todo.id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <label className="member-label">
        <span>{todo.name}</span>
        <input type="checkbox" className="checkbox" />
      </label>
    </li>
  );
}
