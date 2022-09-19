export const ITEM_DETAILS_ACTIONS = {
  loadItemDetails: "itemDetails/LOAD",
  startLoading: "itemDetails/START_LOADING",
  failLoading: "itemDetails/FAIL_LOADING",
  successLoading: "itemDetails/SUCCESS_LOADING",
};

export const loadItemDetails = (obj) => ({
  type: ITEM_DETAILS_ACTIONS.loadItemDetails,
  payload: obj,
});

export const startLoading = () => ({
  type: ITEM_DETAILS_ACTIONS.startLoading,
});

export const failLoading = () => ({
  type: ITEM_DETAILS_ACTIONS.failLoading,
});

export const successLoading = (payload) => ({
  type: ITEM_DETAILS_ACTIONS.successLoading,
  payload,
});
