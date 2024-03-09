import React from "react";
import { useEffect } from "react";
import "./App.css";
import { WorkerPage } from "./page/WorkerPage";
import { useDispatch } from "react-redux";
// import { getAllPrintFileFetch } from "./features/action/fetchPrint";
import { Layout } from "./components/Layout";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./page/LoginPage";
import { RegisterPage } from "./page/RegisterPage";
import { getMe } from "./features/redux/authSlice";
import { getAllPrintFileFetch } from "./features/action/fetchPrint";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
    dispatch(getAllPrintFileFetch())
  }, [dispatch]);


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WorkerPage/>} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
