import React from "react";
import { useEffect } from "react";
import "./App.css";
import { WorkerPage } from "./page/WorkerPage";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./components/Layout";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./page/LoginPage";
import { RegisterPage } from "./page/RegisterPage";
import { checkIsAuth, getMe } from "./features/redux/authSlice";
import { getAllPrintFileFetch } from "./features/action/fetchPrint";
import { DesigSideList } from "./components/DesigSideList";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);

  useEffect(() => {
    dispatch(getMe());
    dispatch(getAllPrintFileFetch());
  }, [dispatch]);

   // if (isAuth) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<WorkerPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/desing" element={<DesigSideList />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </Layout>
    );
  //  } else {
  //    return (
  //      <Layout>
  //        <Routes>
  //          <Route path="/" element={<Navigate to="/login" />} />
  //          <Route path="/register" element={<RegisterPage />} />
  //          <Route path="/login" element={<LoginPage />} />
  //        </Routes>
  //        <ToastContainer position="bottom-right" />
  //      </Layout>
  //    );
  //  }
}

export default App;
