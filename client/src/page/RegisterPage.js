import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserFetch } from "../features/action/fetchAuth";
import {Bounce, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.authFile)

  const heandleSubmit = () => {
    try {
      dispatch(registerUserFetch( username, password ));
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    if(status) toast(status, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
   }, [status]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">REGISTRATION</h1>
      <label className="text-xs text-gray-400">
        Username:
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-gray-400">
        Password:
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={heandleSubmit}
          className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-w px-4"
        >
          Registracion
        </button>
        <Link
          to={"/login"}
          className="flex justify-center items-center text-xs"
        >
          You have login ?
        </Link>
      </div>
    </form>
  );
};