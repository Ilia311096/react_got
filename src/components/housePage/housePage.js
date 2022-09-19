import React, { useState, useContext } from "react";
import { ItemList } from "../itemList/itemList";
import { ItemDetails } from "../itemDetails/itemDetails";
import { RowBlock } from "../rowBlock/rowBlock";
import { Field } from "../itemDetails/itemDetails";
import { ServiceWrap } from "../serviceWrap/serviceWrap";

export default function HousePage() {
  const [selectedHouse, SetSelectedHouse] = useState(1);
  const gotService = useContext(ServiceWrap);
  const changeSelectedHouse = (id) => {
    SetSelectedHouse(id);
  };

  const itemList = (
    <ItemList
      fun={changeSelectedHouse}
      gotService={gotService.getAllHouses}
      renderName={(item) => item.name}
    />
  );
  const charDetails = (
    <ItemDetails itemId={selectedHouse} url={gotService.getHouse}>
      <Field name={"region"} label={"Region"} />
      <Field name={"words"} label={"Words"} />
      <Field name={"overloard"} label={"Overloard"} />
    </ItemDetails>
  );

  return <RowBlock left={itemList} right={charDetails} />;
}
