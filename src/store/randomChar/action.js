export const RANDOM_ACTIONS = {
  loadRandomChar: "randomChar/LOAD",
  startLoading: "randomChar/START_LOADING",
  failLoading: "randomChar/FAIL_LOADING",
  successLoading: "randomChar/SUCCESS_LOADING",
  toggleShow: "randomChar/TOGGLE_SHOW",
};

export const loadRandomChar = (id) => ({
  type: RANDOM_ACTIONS.loadRandomChar,
  payload: id,
});

export const startLoading = () => ({
  type: RANDOM_ACTIONS.startLoading,
});
export const toggleShow = () => ({
  type: RANDOM_ACTIONS.toggleShow,
});

export const failLoading = () => ({
  type: RANDOM_ACTIONS.failLoading,
});

export const successLoading = (payload) => ({
  type: RANDOM_ACTIONS.successLoading,
  payload,
});
