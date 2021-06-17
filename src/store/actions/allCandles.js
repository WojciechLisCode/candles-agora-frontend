import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const fetchCandlesSuccess = (candlesArray) => ({
  type: "candles/fetch",
  payload: candlesArray,
});

export const fetchAllCandles = (searchInput) => {
  return async (dispatch, getState) => {
    console.log(searchInput);
    const response = await axios.get(
      `${apiUrl}/candles?searchInput=${searchInput}`
    );
    dispatch(fetchCandlesSuccess(response.data.candles.rows));
  };
};
