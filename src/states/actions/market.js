export const FETCH_DATA = "MARKET/FETCH_DATA";
export const FETCH_DATA_SUCCEEDED = "MARKET/FETCH_DATA_SUCCEEDED";
export const FETCH_DATA_FAILED = "MARKET/FETCH_DATA_FAILED";

export const fetchDataAction = () => {
  return {
    type: FETCH_DATA,
  };
};

export const fetchDataSucceededAction = ({
  marketCap,
  currentPrice,
  maxSupply,
}) => {
  return {
    type: FETCH_DATA_SUCCEEDED,
    payload: {
      marketCap,
      currentPrice,
      maxSupply,
    },
  };
};

export const fetchDataFailedAction = () => {
  return {
    type: FETCH_DATA_FAILED,
  };
};
