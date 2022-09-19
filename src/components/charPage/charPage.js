import React, { useState, useContext } from "react";
import { ItemList } from "../itemList/itemList";

import { RowBlock } from "../rowBlock/rowBlock";
import { Field } from "../itemDetails/itemDetails";
import { ItemDetails } from "../itemDetails/itemDetails";
import { ServiceWrap } from "../serviceWrap/serviceWrap";
export default function CharPage() {
  const [selectedChar, setSelectChar] = useState(41);
  const gotService = useContext(ServiceWrap);

  const changeSelectedChar = (id) => {
    setSelectChar(id);
  };

  const itemList = (
    <ItemList
      fun={changeSelectedChar}
      gotService={gotService.getAllCharacters}
      renderName={(item) => `${item.name} ${item.born}`}
    />
  );
  const charDetails = (
    <ItemDetails itemId={selectedChar} url={gotService.getCharacter}>
      <Field name={"born"} label={"Born"} />
      <Field name={"died"} label={"Died"} />
      <Field name={"gender"} label={"Gender"} />
      <Field name={"culture"} label={"Culture"} />
    </ItemDetails>
  );

  return <RowBlock left={itemList} right={charDetails} />;
}
