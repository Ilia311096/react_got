import {
  failLoading,
  ITEMS_LIST_ACTIONS,
  startLoading,
  successLoading,
} from "../action.js";

export const loadItemsList = (store) => (next) => (action) => {
  if (action.type !== ITEMS_LIST_ACTIONS.loadItemsList) {
    return next(action);
  }

  store.dispatch(startLoading());

  action
    .payload()
    .then((itemsList) => store.dispatch(successLoading(itemsList)))
    .catch(() => store.dispatch(failLoading()));
};
