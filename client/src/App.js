import React from "react";
import  { useEffect } from "react";
import "./App.css";
import { PageWorker } from "./page/PageWorker";
import { Header } from "./page/Header";
import { useDispatch } from "react-redux";
import { getAllPrintFileFetch } from "./features/action/fetchPrint";

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
  dispatch(getAllPrintFileFetch());
  },[dispatch])

  return (
    <div>
      <Header/>
      <PageWorker/>
    </div>
  );
}

export default App;
