import { createStore, combineReducers, applyMiddleware } from "redux";
import { actionLogger } from "./middlewares/Logger";
import { randomCharReducer } from "./randomChar/reducer";
import { loadRandomChar } from "./randomChar/middlewares/loadRandomChar";
import { itemsListReducer } from "./itemsList/reducer";
import { loadItemsList } from "./itemsList/middlewares/loadItemsList";
import { itemDetailsReducer } from "./itemDetails/reducer";
import { loadItemDetails } from "./itemDetails/middlewares/loadItemDetails";
const rootreducer = combineReducers({
  randomChar: randomCharReducer,
  itemDetails: itemDetailsReducer,
  itemsList: itemsListReducer,
});

export const store = createStore(
  rootreducer,
  applyMiddleware(actionLogger, loadRandomChar, loadItemDetails, loadItemsList)
);
