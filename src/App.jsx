import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import "./App.css";
import { HomeManage } from "./HomeAndProfilManage";
import { ClientAuth } from "./components/ClientAuth";

uuidv4();

function App() {

  return (
    <>
    <ClientAuth/>
{/* <HomeManage/>     */}
    </>
  );
}

export default App;
