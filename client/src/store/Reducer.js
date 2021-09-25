import { useReducer } from "react";
import { ADD_TO_HISTORY } from "./Actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    default:
      return { ...state };
  }
}
export function StoreReducer(initialState) {
  return useReducer(reducer, initialState);
}
