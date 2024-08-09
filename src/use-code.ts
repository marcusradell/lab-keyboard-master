import { useState, useEffect } from "react";
import { getCode } from "./api";

export function useCode() {
  const [code, setCode] = useState("");

  useEffect(() => {
    getCode().then((code) => setCode(code));

    return () => {};
  }, []);

  return code;
}
