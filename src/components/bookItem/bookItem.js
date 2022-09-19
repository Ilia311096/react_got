import React, { useContext } from "react";
import { ItemDetails } from "../itemDetails/itemDetails";
import { Field } from "../itemDetails/itemDetails";
//import GotService from "../../services/service";
import { useParams } from "react-router-dom";
import { ServiceWrap } from "../serviceWrap/serviceWrap";

export function BookItem() {
  // const gotService = new GotService();
  const { bookId } = useParams();
  const gotService = useContext(ServiceWrap);

  return (
    <div>
      <ItemDetails itemId={bookId} url={gotService.getBook}>
        <Field name={"numberOfPages"} label={"NumberOfPages"} />
        <Field name={"publisher"} label={"Publisher"} />
        <Field name={"released"} label={"Released"} />
      </ItemDetails>
    </div>
  );
}
