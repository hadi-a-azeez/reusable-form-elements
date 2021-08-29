import styles from "./App.module.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div className={styles.container}>
      <Input placeholder="Enter your name" value={name} onChange={setName} />
    </div>
  );
}

export default App;
