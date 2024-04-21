import MemberItem from "./MemberItem";

export default function MemberList({ members }) {
  return (
    <ul>
      {members.map((member) => (
        <MemberItem key={member.id} member={member} />
      ))}
    </ul>
  );
}
