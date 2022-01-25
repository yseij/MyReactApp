import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='Learn react'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React course'/>
    </div>
  );
}

export default App;
