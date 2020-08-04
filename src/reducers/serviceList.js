import {nanoid} from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE } from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  console.log(action);
  
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name: name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
      case FILTER_SERVICE:
        const { filter } = action.payload;
        
        return state.filter(item => item.name.includes(filter))  
    default:
      return state;
  }
}


// list.filter(item => list.name.includes())
