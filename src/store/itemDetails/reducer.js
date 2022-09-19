import { ITEM_DETAILS_ACTIONS } from "./action";
const initState = {
  itemDetails: {},
  error: false,
  loading: true,
};
export const itemDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case ITEM_DETAILS_ACTIONS.startLoading:
      return {
        itemDetails: {},
        error: false,
        loading: true,
      };
    case ITEM_DETAILS_ACTIONS.successLoading:
      const itemDetails = action.payload;
      return {
        itemDetails,
        error: false,
        loading: false,
      };
    case ITEM_DETAILS_ACTIONS.failLoading:
      return {
        itemDetails: {},
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
