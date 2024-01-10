import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import Publibaction from "./components/Publibaction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <Home/>
       <Publibaction/>
       <Publibaction/>
      
    </>
  );
}

export default App;
