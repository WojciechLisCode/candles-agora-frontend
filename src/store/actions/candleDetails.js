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

export const addNewConnection = (
  connectionType,
  connectionText,
  candleId,
  userId
) => {
  console.log(
    " type: ",
    connectionType,
    " text: ",
    connectionText,
    " candle: ",
    candleId,
    " user ",
    userId
  );
  return async (dispatch, getState) => {
    const response = await axios.post(`${apiUrl}/candles/newConnection`, {
      connectionType,
      connectionText,
      candleId,
      userId,
    });
    console.log(response);
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
