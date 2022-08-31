import { fetchRequest, fetchSuccess, fetchFailure } from "../reducers/auth";

export const fetchApi = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchSuccess(res));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
        console.log(error);
      });
  };
};
