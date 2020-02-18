import { createStore } from "redux";

const initialState = {
  view: "top",
  user: "",
};

export const changeView = view => {
  return {
    type: "CHANGE_VIEW",
    view
  };
};

export const selectUser = (user) => {
    return {
      type: "SELECT_USER",
      user
    };
  };
export const setDate = date => {
  return {
    type: "SET_DATE",
    date
  };
};

export const setLocation = (prefecture, city) => {
  return {
    type: "SET_LOCATION",
    prefecture,
    city
  };
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "CHANGE_VIEW": {
      return { ...state, view: action.view };
    }
    case "SET_DATE": {
      return { ...state, date: action.date };
    }
    case "SET_LOCATION": {
      const newLocation = {
        prefecture: action.prefecture,
        city: action.city
      };
      return { ...state, newLocation };
    }
    case "SELECT_USER": {
        return { ...state, user: action.user};
      }
  }
  return state;
};

export const store = createStore(reducer);
