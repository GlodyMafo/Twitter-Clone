import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import Tweet from "./components/Tweet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <Home/>
       <Tweet/>
       <Tweet/>
      
    </>
  );
}

export default App;
