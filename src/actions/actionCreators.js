import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE,
    CLEAR_SERVICE,
    FILTER_SERVICE,
    FIND_SERVICE
  } from "./actionTypes";
  
  export function addService(name, price) {
    return { type: ADD_SERVICE, payload: { name, price } };
  }
  
  export function clearService(name, price) {
    return { type: CLEAR_SERVICE, payload: { name, price } };
  }
  
  export function removeService(id) {
    return { type: REMOVE_SERVICE, payload: { id } };
  }
  
  export function editService(name, price) {
    return { type: EDIT_SERVICE, payload: { name, price } };
  }
  
  export function filterService(filter) {
      return { type: FILTER_SERVICE, payload: { filter } };
    }

    // export function findService(name, value) {
    //   return { type: FIND_SERVICE, payload: { name, value } };
    // }
  
  export function changeServiceField(name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
  }
  