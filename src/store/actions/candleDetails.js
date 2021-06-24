import axios from "axios";

const apiUrl = "https://candles-agora.herokuapp.com";

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

export const deleteCandle = (id) => {
  return async (dispatch, getState) => {
    await axios.delete(`${apiUrl}/candles/${id}`);
  };
};

export const addNewConnection = (
  connectionType,
  connectionText,
  candleId,
  userId
) => {
  return async (dispatch, getState) => {
    const response = await axios.post(
      `${apiUrl}/candles/newConnection/${connectionType}`,
      {
        connectionText,
        candleId,
        userId,
      }
    );
    console.log(response);
    dispatch(fetchCandleById(candleId));
  };
};
