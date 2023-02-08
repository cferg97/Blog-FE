import { GET_CURRENT_USER, GET_POST_DATA } from "../actions";

const initialState = {
  posts: [],
  user: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_CURRENT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
