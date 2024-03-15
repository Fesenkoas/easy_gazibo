import { baseURL } from "../../util/Constant";

//Change print:false => true
export const putStopPrintFileFetch = (id) => (dispatch) => {
  
    fetch(`${baseURL}/desig/stop`, {
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