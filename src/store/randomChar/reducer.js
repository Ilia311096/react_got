import { RANDOM_ACTIONS } from "./action";
const initState = {
  char: {},
  error: false,
  loading: true,
};
export const randomCharReducer = (state = initState, action) => {
  switch (action.type) {
    case RANDOM_ACTIONS.startLoading:
      return {
        char: {},
        error: false,
        loading: true,
      };
    case RANDOM_ACTIONS.successLoading:
      const char = action.payload;
      return {
        char,
        error: false,
        loading: false,
      };
    case RANDOM_ACTIONS.failLoading:
      return {
        char: {},
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
