import MemberList from "./components/TodoList/MemberList";
import Buttons from "./components/TodoList/Action";
import members from "./data/fixtures";
import Search from "./components/TodoList/Search";
import "./Styless.css";

function App() {
  return (
    <div className="team-member-selector">
      <h2>Add members to Front-end development team</h2>
      <Search />
      <MemberList members={members} />
      <Buttons />
    </div>
  );
}

export default App;
