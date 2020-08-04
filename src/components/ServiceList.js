import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";

function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };
  const handleEdit = (name, price) => {
    dispatch(editService(name, price));
  };
console.log(items);

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.name , o.price)}>Edit</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
export default ServiceList;
