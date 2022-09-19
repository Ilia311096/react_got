import React, { useState } from "react";
export function useItemList(fun, gotService, renderName) {
  const [items, setItems] = useState(null);

  const getItems = () => {
    gotService().then(updateState);
  };
  const updateState = (item) => {
    setItems(mappingItems(item));
  };

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
  return { items, getItems };
}
