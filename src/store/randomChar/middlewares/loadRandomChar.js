import {
  failLoading,
  RANDOM_ACTIONS,
  startLoading,
  successLoading,
} from "../action.js";
import GotService from "../../../services/service";

export const loadRandomChar = (store) => (next) => (action) => {
  if (action.type !== RANDOM_ACTIONS.loadRandomChar) {
    return next(action);
  }

  store.dispatch(startLoading());

  const requestRandomChar = new GotService();
  const id = action.payload;
  requestRandomChar
    .getCharacter(id)
    .then((char) => store.dispatch(successLoading(char)))
    .catch(() => store.dispatch(failLoading()));
};
