import { FETCH_DATA_SUCCEEDED } from "../actions/market";

const initialState = {
  marketCap: 0,
  currentPrice: 0,
  maxSupply: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
