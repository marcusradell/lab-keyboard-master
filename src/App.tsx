import "./App.css";
import { useCode } from "./use-code";

function App() {
  const code = useCode();

  return (
    <>
      <code>{code}</code>
      <br />
      <input type="text" name="input" id="input" />
    </>
  );
}

export default App;
