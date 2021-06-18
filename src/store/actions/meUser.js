import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const newCandleIdUpdate = (newCandleId) => ({
  type: "meUser/newCandleId",
  payload: newCandleId,
});
