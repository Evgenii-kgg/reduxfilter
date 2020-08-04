import { CHANGE_SERVICE_FIELD, EDIT_SERVICE, CLEAR_SERVICE,} from "../actions/actionTypes";
const initialState = { name: "", price: "" };

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE: {
       const {name, price} = action.payload
      return (state = {name, price});
    }
    case CLEAR_SERVICE: {
      const { name, price } = action.payload;
      return (state={name:'', price:''})
    }
    default:
      return state;
  }
}
