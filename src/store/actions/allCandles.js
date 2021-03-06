import axios from "axios";
import { newCandleIdUpdate } from "../actions/meUser";

const apiUrl = "https://candles-agora.herokuapp.com";

export const fetchCandlesSuccess = (candlesArray) => ({
  type: "candles/fetch",
  payload: candlesArray,
});

export const fetchAllCandles = (searchInput) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/candles?searchInput=${searchInput}`
    );
    dispatch(fetchCandlesSuccess(response.data.candles.rows));
  };
};

export const addNewCandle = (
  candleName,
  candleDescription,
  candleImageUrl,
  brandid
) => {
  return async (dispatch, getState) => {
    let response = await axios.post(`${apiUrl}/candles/newCandle`, {
      candleName,
      candleDescription,
      candleImageUrl,
      brandid,
    });

    dispatch(newCandleIdUpdate(response.data.newCandleId));
  };
};
