import { GET_HOUSE_OWNER, GET_HOUSE_LIST } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_HOUSE_OWNER}_PENDING`:
    case `${GET_HOUSE_LIST}_PENDING`:    
      return {
        ...state,
        loading: true
      };
    case `${GET_HOUSE_OWNER}_FULFILLED`:
    case `${GET_HOUSE_LIST}_FULFILLED`:
      return {
        ...state,
        data: action?.payload?.data,
        loading: false
      };
    case `${GET_HOUSE_OWNER}_REJECTED`:
    case `${GET_HOUSE_LIST}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
