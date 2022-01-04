import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDataAction } from "states/actions/market";

const MarketService = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());

    const timer = setInterval(() => {
      dispatch(fetchDataAction());
    }, 1000 * 60 * 15); //  15 mins

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return null;
};

export default MarketService;
