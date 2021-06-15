import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const fetchCandlesSuccess = (candlesArray) => ({
  type: "candles/fetch",
  payload: candlesArray,
});

export const fetchAllCandles = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/candles`);
    dispatch(fetchCandlesSuccess(response.data.candles.rows));
  };
};
