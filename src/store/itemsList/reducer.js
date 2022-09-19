import { ITEMS_LIST_ACTIONS } from "./action";
const initState = {
  itemsList: [],
  error: false,
  loading: true,
};
export const itemsListReducer = (state = initState, action) => {
  switch (action.type) {
    case ITEMS_LIST_ACTIONS.startLoading:
      return {
        itemsList: [],
        error: false,
        loading: true,
      };
    case ITEMS_LIST_ACTIONS.successLoading:
      const newList = action.payload;
      return {
        itemsList: newList,
        error: false,
        loading: false,
      };
    case ITEMS_LIST_ACTIONS.failLoading:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
