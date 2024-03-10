import { getMessage } from "../redux/messageSlice";
import { getAllPrintFile, loading } from "../redux/printSlice";

const baseURL = "http://localhost:3002";

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
    });
};
//Change print:false => true
export const putUpdatePrintFileFetch = (id) => (dispatch) => {
  
  fetch(`${baseURL}/print/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then((data) => {
    //  console.log(data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};
