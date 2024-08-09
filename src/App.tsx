import { useEffect, useState } from "react";
import "./App.css";
import { getCode } from "./api";

function App() {
  const [code, setCode] = useState("");

  useEffect(() => {
    getCode().then((code) => setCode(code));

    return () => {};
  }, []);

  return (
    <>
      <code>{code}</code>
      <br />
      <input type="text" name="input" id="input" />
    </>
  );
}

export default App;
