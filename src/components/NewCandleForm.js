import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewCandle } from "../store/actions/allCandles";

export default function NewCandleForm(props) {
  const dispatch = useDispatch();

  const [candleName, setCandleName] = useState("");
  const [candleDescription, setCandleDescription] = useState("");
  const [candleImageUrl, setCandleImageUrl] = useState("");

  function submitNewCandle(event) {
    event.preventDefault();
    dispatch(addNewCandle(candleName, candleDescription, candleImageUrl));
    setCandleName("");
    setCandleDescription("");
    setCandleImageUrl("");
  }

  return (
    <div>
      <div>
        <p>Image preview:</p>
        <img
          src={candleImageUrl}
          alt="candle preview"
          width="200"
          height="200"
        ></img>
      </div>
      <div>
        <h2>Add new candle:</h2>
        <form on onSubmit={submitNewCandle}>
          <div>
            Candle name:
            <input
              type="text"
              value={candleName}
              onChange={(e) => {
                setCandleName(e.target.value);
              }}
            />
          </div>
          <div>
            <p>Candle description:</p>
            <textarea
              value={candleDescription}
              onChange={(e) => {
                setCandleDescription(e.target.value);
              }}
            />
          </div>
          <div>
            Candle image URL:
            <input
              type="text"
              value={candleImageUrl}
              onChange={(e) => {
                setCandleImageUrl(
                  "https://drive.google.com/uc?id=" +
                    e.target.value.split("/")[5]
                );
              }}
            />
          </div>
          {candleName !== "" &&
          candleDescription !== "" &&
          candleImageUrl !== "" ? (
            <button type="submit">Add it!</button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
