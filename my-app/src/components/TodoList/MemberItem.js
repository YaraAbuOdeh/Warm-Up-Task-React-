export default function MemberItem({ member }) {
  return (
    <li
      key={member.id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <label className="member-label">
        <span>{member.name}</span>
        <input type="checkbox" className="checkbox" />
      </label>
    </li>
  );
}
