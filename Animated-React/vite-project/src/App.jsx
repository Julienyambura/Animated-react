import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./signup.jsx"; // Assuming Signup.js is in the same directory

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
