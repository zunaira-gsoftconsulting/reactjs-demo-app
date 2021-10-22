import { UPDATE_LANGUAGE } from "../types";

export const changeLanguage = (language) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_LANGUAGE,
      payload: language,
    });
  } catch (error) {
    console.log({ error });
  }
};
