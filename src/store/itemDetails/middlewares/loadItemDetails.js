import {
  failLoading,
  ITEM_DETAILS_ACTIONS,
  startLoading,
  successLoading,
} from "../action.js";

export const loadItemDetails = (store) => (next) => (action) => {
  if (action.type !== ITEM_DETAILS_ACTIONS.loadItemDetails) {
    return next(action);
  }

  store.dispatch(startLoading());

  const { url, itemId } = action.payload;
  url(itemId)
    .then((char) => store.dispatch(successLoading(char)))
    .catch(() => store.dispatch(failLoading()));
};
