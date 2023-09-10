import "./App.css";
import { TodoList, NewTodoForm } from "./components";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>ToDo List Application</h1>
      </div>
      <hr style={{ marginBottom: "30px" }} />
      <TodoList />
      <NewTodoForm className="plus" />
    </div>
  );
}

export default App;
