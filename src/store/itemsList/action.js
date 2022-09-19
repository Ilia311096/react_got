export const ITEMS_LIST_ACTIONS = {
  loadItemsList: "itemsList/LOAD",
  startLoading: "itemsList/START_LOADING",
  failLoading: "itemsList/FAIL_LOADING",
  successLoading: "itemsList/SUCCESS_LOADING",
};

export const loadItemList = (gotService) => ({
  type: ITEMS_LIST_ACTIONS.loadItemsList,
  payload: gotService,
});

export const startLoading = () => ({
  type: ITEMS_LIST_ACTIONS.startLoading,
});

export const failLoading = () => ({
  type: ITEMS_LIST_ACTIONS.failLoading,
});

export const successLoading = (payload) => ({
  type: ITEMS_LIST_ACTIONS.successLoading,
  payload,
});
