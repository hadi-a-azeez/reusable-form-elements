import styles from "./App.module.css";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div className={styles.container}>
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={setName}
        style={{ width: "30%" }}
      />
      <Button
        style={{ width: "30%", marginTop: "1rem" }}
        onClick={() => console.log("btn clicked")}
      >
        Log in
      </Button>
    </div>
  );
}

export default App;
