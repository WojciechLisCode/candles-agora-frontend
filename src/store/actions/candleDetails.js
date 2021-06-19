import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const fetchCandleSuccess = (candleDetails) => ({
  type: "candle/fetch",
  payload: candleDetails,
});

export const fetchCandleById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/candles/${id}`);
    dispatch(fetchCandleSuccess(response.data.candleDetails));
  };
};
