import "./App.css";

const code = `console.log("Hello, World!")`;

function App() {
  return (
    <>
      <code>{code}</code>
      <br />
      <input type="text" name="input" id="input" />
    </>
  );
}

export default App;
