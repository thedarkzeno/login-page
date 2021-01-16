import { createStore } from "redux";

const INITIAL_STATE = {
  email: "",
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "Set_Email") {
    return { ...state, email: action.value };
  }
  return state;
}
const store = createStore(reducer);

export default store;