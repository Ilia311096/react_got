import React, { useContext } from "react";
import { ItemList } from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { ServiceWrap } from "../serviceWrap/serviceWrap";
import { RowBlock } from "../rowBlock/rowBlock";
//import { withRouter } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
function BookPage() {
  const navigate = useNavigate();
  const gotService = useContext(ServiceWrap);

  const itemList = (
    <ItemList
      fun={(idItem) => {
        navigate(idItem);
      }}
      gotService={gotService.getAllBooks}
      renderName={(item) => item.name}
    />
  );

  return (
    <div>
      <RowBlock left={itemList} right={<Outlet />} />
    </div>
  );
}
export default BookPage;
