import React from "react";
import  { useEffect } from "react";
import "./App.css";
import { WorkerPage } from "./page/WorkerPage";
import { HeaderPage } from "./page/HeaderPage";
import { useDispatch } from "react-redux";
import { getAllPrintFileFetch } from "./features/action/fetchPrint";

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
  dispatch(getAllPrintFileFetch());
  },[dispatch])

  return (
    <div>
      <HeaderPage/>
      <WorkerPage/>
    </div>
  );
}

export default App;
