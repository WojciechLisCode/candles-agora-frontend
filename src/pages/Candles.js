import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { selectAllCandles } from "../store/selectors/allCandles";
import { fetchAllCandles } from "../store/actions/allCandles";

export default function Candles() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const allCandles = useSelector(selectAllCandles);

  useEffect(() => {
    dispatch(fetchAllCandles(searchInput));
  }, [dispatch, searchInput]);
  return (
    <div>
      <div>
        <h3>search:</h3>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value.toUpperCase());
          }}
        ></input>
      </div>
      {allCandles === null ? (
        <div>Loading</div>
      ) : (
        <h2>
          {allCandles.map((candle) => {
            return <p>Candle:{candle.name}</p>;
          })}
        </h2>
      )}
    </div>
  );
}
