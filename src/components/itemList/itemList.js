import React, { useEffect } from "react";
import "./itemList.css";
import { useSelector, useDispatch } from "react-redux";
import { Spiner } from "../spiner/spiner";
import { selectItemsListModule } from "../../store/itemsList/selector";
import { loadItemList } from "../../store/itemsList/action";

export function ItemList({ renderName, fun, gotService }) {
  const items = useSelector(selectItemsListModule);
  const dispatch = useDispatch();
  const mappingItems = (objs) => {
    return objs.map((item) => {
      const label = renderName(item);
      const id = item.id;
      return (
        <li key={id} className="list-group-item" onClick={() => fun(id)}>
          {label}
        </li>
      );
    });
  };

  useEffect(() => {
    dispatch(loadItemList(gotService));
  }, []);

  return (
    <ul className="item-list list-group ">
      <div style={{ backgroundColor: "white" }}>
        {items.itemsList.length > 1 ? (
          mappingItems(items.itemsList)
        ) : (
          <Spiner />
        )}
      </div>
    </ul>
  );
}
