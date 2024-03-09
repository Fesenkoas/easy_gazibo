import { getMe, loginUser, registerUser } from "../redux/authSlice";
import { getMessage } from "../redux/messageSlice";

const baseURL = "http://localhost:3002";

//Register User
export const registerUserFetch = (username, password) => (dispatch) => {
  fetch(`${baseURL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
       console.log(data);
      // if (data.errorCode) {
      //   dispatch(getMessage(data.message));
      //   return;
      // }
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      dispatch(registerUser(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

//Login User
export const loginUserFetch = (username, password) => (dispatch) => {
  fetch(`${baseURL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.errorCode) {
        dispatch(getMessage(data.message));
        return;
      }
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      dispatch(loginUser(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

//Login User
export const getMeFetch = () => (dispatch) => {
  fetch(`${baseURL}/auth/me`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      if (data.errorCode) {
        dispatch(getMessage(data.message));
        return;
      }
      dispatch(getMe(data));
    })
    .catch((error) => {
      console.log(error);
    });
};
