import { getMessage } from "../redux/messageSlice";
import { getAllPrintFile, loading } from "../redux/printSlice";

const baseURL = "http://localhost:3001"

//Get All Print FIle
export const getAllPrintFileFetch = () => (dispatch) => {
    dispatch(loading(false));
    fetch(`${baseURL}/print/get`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorCode) {
          dispatch(getMessage(data.message));
          return;
        }
        dispatch(getAllPrintFile(data));
      })
      .catch((error) => {
        console.log(error);
      })
  };