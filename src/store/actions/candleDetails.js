import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const fetchCandleSuccess = (candleDetails) => ({
  type: "candle/fetch",
  payload: candleDetails,
});

export const fetchCandleById = (id) => {
  console.log("fetching: ", id);
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/candles/${id}`);
    console.log(response.data);
    dispatch(fetchCandleSuccess(response.data.candleDetails));
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

// export const addNewCandle = (candleName, candleDescription, candleImageUrl) => {
//   return async (dispatch, getState) => {
//     let response = await axios.post(`${apiUrl}/candles/newCandle`, {
//       candleName,
//       candleDescription,
//       candleImageUrl,
//     });

//     dispatch(newCandleIdUpdate(response.data.newCandleId));
//   };
// };
