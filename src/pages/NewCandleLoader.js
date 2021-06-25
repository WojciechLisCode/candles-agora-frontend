import React from "react";
import { useHistory } from "react-router-dom";
import { selectMeUser } from "../store/selectors/meUser";
import { useSelector } from "react-redux";

export default function NewCandleLoader() {
  const history = useHistory();
  const meUser = useSelector(selectMeUser);
  const id = meUser.newCandleId;
  if (id !== null) {
    history.push(`/candle/${id}`);
  } else {
  }
  return <div>Loading {meUser.newCandleId}</div>;
}
