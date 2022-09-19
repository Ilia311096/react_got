import React, { useEffect, useState } from "react";
import "./charDetails.css";
import { loadItemDetails } from "../../store/itemDetails/action";
import { useSelector, useDispatch } from "react-redux";
import { selectItemDetailsModule } from "../../store/itemDetails/selector";
import { Spiner } from "../spiner/spiner";

export const Field = ({ item, name, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label} </span>
      <span>{item[name]}</span>
    </li>
  );
};

export function ItemDetails({ itemId, url, children }) {
  const { itemDetails } = useSelector(selectItemDetailsModule);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadItemDetails({ url, itemId }));
  }, [itemId]);
  if (!itemDetails) {
    return <span className="select-error">no info</span>;
  }
  const { name } = itemDetails;
  return (
    <div className="char-details rounded">
      {itemDetails.name ? (
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {children.map((child) => {
              return { ...child, props: { ...child.props, item: itemDetails } };
            })}
          </ul>
        </div>
      ) : (
        <Spiner />
      )}
    </div>
  );
}
