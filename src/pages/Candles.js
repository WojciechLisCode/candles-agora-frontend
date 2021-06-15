import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { selectAllCandles } from "../store/selectors/allCandles";
import { fetchAllCandles } from "../store/actions/allCandles";

export default function Candles() {
  const dispatch = useDispatch();
  const allCandles = useSelector(selectAllCandles);

  useEffect(() => {
    dispatch(fetchAllCandles());
  }, [dispatch]);
  console.log(allCandles);
  return (
    <div>
      <h2>Landing page</h2>
    </div>
  );
}
