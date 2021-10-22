import { UPDATE_LANGUAGE } from "../types";

const initialState = {
  language: "en",
};

const settings = function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_LANGUAGE: {
      return {
        ...state,
        language: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default settings;
