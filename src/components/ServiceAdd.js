import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeServiceField, addService, clearService, filterService } from "../actions/actionCreators";

function ServiceAdd(props) {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value, filter } = evt.target;
    dispatch(changeServiceField(name, value, filter));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));
  };

  const ClearSubmit = (evt) => {
    evt.preventDefault();
    dispatch(clearService(item.name, item.price));
  };

//   const FilterSubmit = (evt) => {
//     evt.preventDefault();
//     dispatch(findService(item.name, ));
//   };

  const FilterService = (evt) => {
      evt.preventDefault();
      dispatch(filterService(item.filter))    
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} value={item.name} />
        <input name="price" onChange={handleChange} value={item.price} />
        <button type="submit">Save</button>
        <input name='filter' onChange={handleChange} value={item.filter} />
        <button type="submit" onClick={FilterService} >Find</button>
      </form>
      <button type="submit" onClick={ClearSubmit} >Cancel</button>
      <div>
      </div>
    </>
  );
}
export default ServiceAdd;
