// reducers.js
import { ADD_LIKE, SAVE_POST, UNSAVE_POST } from './actions';

const initialState = {
  likedPosts: [],
  savedPosts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likedPosts: [...state.likedPosts, action.payload],
      };
    case SAVE_POST:
      return {
        ...state,
        savedPosts: [...state.savedPosts, action.payload],
      };
    case UNSAVE_POST:
      return {
        ...state,
        savedPosts: state.savedPosts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
