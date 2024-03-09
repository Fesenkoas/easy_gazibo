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
    toast('Logout', {
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
    <div  className="flex p-2 h-14 "style={{ background: 'linear-gradient(to bottom, #abcf4923, rgba(172, 207, 73, 0))' }}>
     {/* <span className="flex jutify-center text-xl   text-white font-extrabold  px-1 py-2">
BLOG-X
</span> */}

{isAuth && (
  <div className="flex gap-8">
    <NavLink
      className="text-xs text-gray-400 hover:text-white"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      to={"/"}
    >
      Home
    </NavLink>
  </div>
)}

<div className="flex jutify-center items-center bg-[#ACCF49] text-sx text-white rounded-lg px-4 py-2 m-2 hover:bg-[#739D00] ">
  <button>{isAuth ? <Link onClick={handleLogout} to={"/login"}>Logout</Link> : <Link to={"/login"}>Login</Link>}</button>

</div>
     </div>
   )
 }


