import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { checkIsAuth, logout } from "../features/redux/authSlice";

export const HeaderPage = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const activeStyle = {
    color: "white",
  };

  const handleLogout = () => {
    dispatch(logout());
    toast("Logout", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div
      className="flex justify-between items-center"
      style={{
        background:
          "linear-gradient(to bottom, #abcf4923, rgba(172, 207, 73, 0))",
      }}
    >
      <span className="flex jutify-center text-xl   text-black font-extrabold  px-1 py-2">
        CASPER
      </span>
      {isAuth && (
        <div className="flex gap-8">
          <div className="flex justify-center items-center bg-[#ACCF49] text-sm text-white rounded-lg px-4 py-2 m-2 hover:bg-[#739D00]">
            <Link to={"/desing"}>Desing</Link>
          </div>
          <div className="flex justify-center items-center bg-[#ACCF49] text-sm text-white rounded-lg px-4 py-2 m-2 hover:bg-[#739D00]">
            <Link to={"/"}>Print</Link>
          </div>
         
        </div>
      )}
      <div className="flex jutify-center items-center bg-[#ACCF49] text-sx text-white rounded-lg px-4 py-2 m-2 hover:bg-[#739D00] ">
            <button>
              {isAuth ? (
                <Link onClick={handleLogout} to={"/login"}>
                  Logout
                </Link>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </button>
          </div>
    </div>
  );
};
