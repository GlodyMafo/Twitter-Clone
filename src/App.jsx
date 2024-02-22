import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import "./App.css";
import { HomeManage } from "./HomeAndProfilManage";
import { ClientAuth } from "./components/ClientAuth";

uuidv4();

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<ClientAuth />} />

        <Route path="/homefield" element={<HomeManage />} />
      </Routes> */}

      <ClientAuth />
    </>
    
  );
}

export default App;
